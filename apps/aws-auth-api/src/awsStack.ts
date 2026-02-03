import './config/dotenv'; // sort-imports-ignore

import { AWS } from '@packages/common-types';
import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { AuthTable } from './lib/dynamoDb/authTable/table';
import { AuthAPIGateway } from './lib/gateway/authAPI';
import { SignInLambda } from './lib/lambdas/signIn/lambda';
import { addCorsPreflight } from './utils/api/addCors';
import { env } from './contants/enviroment';
import { SignUpLambda } from './lib/lambdas/signUp/lambda';
import { GoogleSignInLambda } from './lib/lambdas/googleSignIn/lambda';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, env.STACK_NAME, props);

    const lambdaEnv: AWS.LambdasProps = {
      STACK_NAME: env.STACK_NAME || '',
      SECRET_KEY: env.SECRET_KEY || '',
      GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID || '',
    };

    // DynamoDB
    const authTable = new AuthTable(this);

    // Lambdas
    const signInLambda = new SignInLambda(this, lambdaEnv);
    const signUpLambda = new SignUpLambda(this, lambdaEnv);
    const googleSignInLambda = new GoogleSignInLambda(this, lambdaEnv);

    // API Gateway
    const authApi = new AuthAPIGateway(this);

    // API Routes
    // /auth
    const authRoute = authApi.root.addResource('auth');
    // /auth/signin
    const signinRoute = authRoute.addResource('signin');
    signinRoute.addMethod('POST', new gateway.LambdaIntegration(signInLambda));
    // /auth/signup
    const signupRoute = authRoute.addResource('signup');
    signupRoute.addMethod('POST', new gateway.LambdaIntegration(signUpLambda));
    // /auth/google
    const googleRoute = authRoute.addResource('google');
    googleRoute.addMethod('POST', new gateway.LambdaIntegration(googleSignInLambda));

    // Permissions
    authTable.table.grantReadWriteData(signInLambda);
    authTable.table.grantReadWriteData(signUpLambda);
    authTable.table.grantReadWriteData(googleSignInLambda);

    // CORS Preflight
    addCorsPreflight(signinRoute);
    addCorsPreflight(signupRoute);
    addCorsPreflight(googleRoute);
  }
}

const app = new cdk.App();

new NodeTemplateStack(app);
