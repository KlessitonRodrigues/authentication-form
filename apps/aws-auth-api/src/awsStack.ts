import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { Lambdas } from './@types/lambdas';
import './config/dotenv';
import { env } from './config/dotenv';
import { AuthTable } from './lib/dynamoDb/authTable';
import { AuthAPIGateway } from './lib/gateway/authAPI';
import { SignInLambda } from './lib/lambdas/signIn/lambda';
import { addCorsPreflight } from './utils/api/addCors';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, env.STACK_NAME, props);

    const lambdaEnv: Lambdas.LambdasProps = env;

    // DynamoDB
    const authTable = new AuthTable(this);

    // Lambdas
    const signInLambda = new SignInLambda(this, lambdaEnv);

    // API Gateway
    const authApi = new AuthAPIGateway(this);

    // API Routes
    // /auth
    const authRoute = authApi.root.addResource('auth');
    // /auth/email
    const emailRoute = authRoute.addResource('email');
    emailRoute.addMethod('GET', new gateway.LambdaIntegration(signInLambda));

    // Permissions
    authTable.table.grantReadWriteData(signInLambda);

    // CORS Preflight
    addCorsPreflight(emailRoute);
  }
}

const app = new cdk.App();

new NodeTemplateStack(app);
