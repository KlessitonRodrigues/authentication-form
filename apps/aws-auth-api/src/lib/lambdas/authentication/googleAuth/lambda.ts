import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { Lambdas } from '../../../../@types/lambdas';

export class AuthenticationLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, props: Lambdas.LambdasProps) {
    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_22_X,
      timeout: cdk.Duration.seconds(10),
      handler: 'handler',
      entry: __dirname + '/index.ts',
      environment: {
        MONGODB: props.MONGODB,
        TOKEN_KEY: props.TOKEN_KEY,
      },
      reservedConcurrentExecutions: 1,
      bundling: {
        externalModules: ['aws-cdk-lib', 'constructs'],
      },
    };

    super(scope, 'AuthenticationLambda', params);
  }
}
