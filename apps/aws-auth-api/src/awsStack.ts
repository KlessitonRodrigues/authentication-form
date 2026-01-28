import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { Lambdas } from './@types/lambdas';
import './config/dotenv';
import { env } from './config/dotenv';
import { AuthTable } from './lib/dynamoDb/authTable';
import { AuthAPIGateway } from './lib/gateway/authAPI';
import { EmailAuthenticationLambda } from './lib/lambdas/emailAuth';
import { addCorsPreflight } from './utils/api/addCors';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, env.STACK_NAME, props);

    const lambdaEnv: Lambdas.LambdasProps = env;

    // DynamoDB
    const authTable = new AuthTable(this);

    // Lambdas
    const emailAuthLambda = new EmailAuthenticationLambda(this, lambdaEnv);

    // API Gateway
    const authApi = new AuthAPIGateway(this);

    // API Routes
    // /auth
    const authRoute = authApi.root.addResource('auth');
    // /auth/email
    const emailRoute = authRoute.addResource('email');
    emailRoute.addMethod('GET', new gateway.LambdaIntegration(emailAuthLambda));

    // Permissions
    authTable.table.grantReadWriteData(emailAuthLambda);

    // CORS Preflight
    addCorsPreflight(emailRoute);
  }
}

const app = new cdk.App();

new NodeTemplateStack(app);
