import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

export class AuthAPIGateway extends gateway.RestApi {
  constructor(scope: cdk.Stack) {
    const params: gateway.RestApiProps = {
      restApiName: 'Auth API Gateway',
    };

    super(scope, 'AuthAPIGateway', params);
  }
}
