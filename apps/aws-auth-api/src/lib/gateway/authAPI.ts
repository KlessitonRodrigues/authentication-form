import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { resourceName } from '../../contants/resources';

export class AuthAPIGateway extends gateway.RestApi {
  constructor(scope: cdk.Stack) {
    const params: gateway.RestApiProps = {
      restApiName: resourceName.authAPIGateway,
    };

    super(scope, resourceName.authAPIGateway, params);
  }
}
