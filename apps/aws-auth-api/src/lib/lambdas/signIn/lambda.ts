import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { Lambdas } from '../../../@types/lambdas';

export class SignInLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, lambdaEnv: Lambdas.LambdasProps) {
    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_22_X,
      timeout: cdk.Duration.seconds(10),
      handler: 'handler',
      functionName: 'SignInLambda',
      entry: __dirname + '/index.ts',
      environment: lambdaEnv,
      bundling: {
        environment: lambdaEnv,
      },
    };

    super(scope, 'SignInLambda', params);
  }
}
