import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { Lambdas } from '../../@types/lambdas';
import { createResponse } from '../../utils/api/createResponse';

export class EmailAuthenticationLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, props: Lambdas.LambdasProps) {
    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_22_X,
      timeout: cdk.Duration.seconds(10),
      handler: 'handler',
      functionName: 'EmailAuthenticationLambda',
      entry: __filename,
      environment: {
        TOKEN_KEY: props.TOKEN_KEY,
      },
      reservedConcurrentExecutions: 1,
      bundling: {
        externalModules: ['aws-cdk-lib', 'constructs'],
      },
    };

    super(scope, 'EmailAuthenticationLambda', params);
  }
}

export const handler: Lambdas.APIHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);

    return createResponse(200, { success: true, token: 'token123' });
  } catch (err: any) {
    console.error(err);
    return createResponse(401, { error: 'Error', details: err?.message || err });
  }
};
