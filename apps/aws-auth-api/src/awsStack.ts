import './config/dotenv'; // sort-imports-ignore

import { AWS } from '@packages/common-types';
import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { AuthTable } from './lib/dynamoDb/authTable/table';
import { AuthAPIGateway } from './lib/gateway/authAPI';
import { SignInLambda } from './lib/lambdas/signIn/lambda';
import { addCorsPreflight, addPreflight } from './utils/api/preflightResponse';
import { env } from './contants/enviroment';
import { SignUpLambda } from './lib/lambdas/signUp/lambda';
import { GoogleSignInLambda } from './lib/lambdas/googleSignIn/lambda';
import { VerifyRecoveryCodeLambda } from './lib/lambdas/verifyRecoveryCode/lambda';
import { SendRecoveryCodeLambda } from './lib/lambdas/sendRecoveryCode/lambda';
import { RefreshTokenLambda } from './lib/lambdas/refreshToken/lambda';
import { ResetPasswordLambda } from './lib/lambdas/resetPassword/lambda';
import { resourceNames } from './contants/resources';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, env.STACK_NAME, props);

    // DynamoDB
    const authTable = new AuthTable(this);

    // Log Group
    const logGroup = new cdk.aws_logs.LogGroup(this, resourceNames.logGroup, {
      logGroupName: resourceNames.logGroup,
      retention: cdk.aws_logs.RetentionDays.ONE_WEEK,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Lambda Functions
    const lambdaEnv: AWS.LambdasProps = {
      STACK_NAME: env.STACK_NAME,
      SECRET_KEY: env.SECRET_KEY,
      GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
      COOKIE_DOMAIN: env.COOKIE_DOMAIN,
    };

    const signInLambda = new SignInLambda(this, lambdaEnv, logGroup);
    const signUpLambda = new SignUpLambda(this, lambdaEnv, logGroup);
    const googleSignInLambda = new GoogleSignInLambda(this, lambdaEnv, logGroup);
    const verifyRecoveryCodeLambda = new VerifyRecoveryCodeLambda(this, lambdaEnv, logGroup);
    const sendRecoveryCodeLambda = new SendRecoveryCodeLambda(this, lambdaEnv, logGroup);
    const refreshTokenLambda = new RefreshTokenLambda(this, lambdaEnv, logGroup);
    const resetPasswordLambda = new ResetPasswordLambda(this, lambdaEnv, logGroup);

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

    // API Preflight
    addPreflight(refreshTokenRoute);

    addCorsPreflight(signinRoute);
    addCorsPreflight(signupRoute);
    addCorsPreflight(googleRoute);
    addCorsPreflight(sendRecoveryCodeRoute);
    addCorsPreflight(verifyRecoveryCodeRoute);
    addCorsPreflight(resetPasswordRoute);
  }
}

const app = new cdk.App();

new NodeTemplateStack(app);
