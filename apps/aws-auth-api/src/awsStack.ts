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
import { VerifyRecoveryCodeLambda } from './lib/lambdas/verifyRecoveryCode/lambda';
import { SendRecoveryCodeLambda } from './lib/lambdas/sendRecoveryCode/lambda';
import { RefreshTokenLambda } from './lib/lambdas/refreshToken/lambda';
import { ResetPasswordLambda } from './lib/lambdas/resetPassword/lambda';

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
    const verifyRecoveryCodeLambda = new VerifyRecoveryCodeLambda(this, lambdaEnv);
    const sendRecoveryCodeLambda = new SendRecoveryCodeLambda(this, lambdaEnv);
    const refreshTokenLambda = new RefreshTokenLambda(this, lambdaEnv);
    const resetPasswordLambda = new ResetPasswordLambda(this, lambdaEnv);

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
    // /auth/send-recovery-code
    const sendRecoveryCodeRoute = authRoute.addResource('send-recovery-code');
    sendRecoveryCodeRoute.addMethod('POST', new gateway.LambdaIntegration(sendRecoveryCodeLambda));
    // /auth/verify-recovery-code
    const verifyRecoveryCodeRoute = authRoute.addResource('verify-recovery-code');
    verifyRecoveryCodeRoute.addMethod(
      'POST',
      new gateway.LambdaIntegration(verifyRecoveryCodeLambda),
    );
    // /auth/refresh-token
    const refreshTokenRoute = authRoute.addResource('refresh-token');
    refreshTokenRoute.addMethod('POST', new gateway.LambdaIntegration(refreshTokenLambda));
    // /auth/reset-password
    const resetPasswordRoute = authRoute.addResource('reset-password');
    resetPasswordRoute.addMethod('POST', new gateway.LambdaIntegration(resetPasswordLambda));

    // Permissions
    authTable.table.grantReadWriteData(signInLambda);
    authTable.table.grantReadWriteData(signUpLambda);
    authTable.table.grantReadWriteData(googleSignInLambda);
    authTable.table.grantReadWriteData(verifyRecoveryCodeLambda);
    authTable.table.grantReadWriteData(sendRecoveryCodeLambda);
    authTable.table.grantReadWriteData(refreshTokenLambda);
    authTable.table.grantReadWriteData(resetPasswordLambda);

    // CORS Preflight
    addCorsPreflight(signinRoute);
    addCorsPreflight(signupRoute);
    addCorsPreflight(googleRoute);
    addCorsPreflight(sendRecoveryCodeRoute);
    addCorsPreflight(verifyRecoveryCodeRoute);
    addCorsPreflight(refreshTokenRoute);
    addCorsPreflight(resetPasswordRoute);
  }
}

const app = new cdk.App();

new NodeTemplateStack(app);
