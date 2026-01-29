import { AWS } from '@packages/common-types';
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { resourceNames } from '../../../contants/resources';

export class SignInLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, lambdaEnv: AWS.LambdasProps) {
    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_22_X,
      timeout: cdk.Duration.seconds(10),
      handler: 'handler',
      functionName: resourceNames.signInLambda,
      entry: __dirname + '/index.ts',
      environment: lambdaEnv,
      bundling: {
        environment: lambdaEnv,
      },
    };

    super(scope, resourceNames.signInLambda, params);
  }
}
