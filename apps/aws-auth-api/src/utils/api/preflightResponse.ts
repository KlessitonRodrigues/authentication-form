import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { apiOrigins } from '../../contants/resources';

export const addPreflight = (resource: cdk.aws_apigateway.Resource) => {
  resource.addCorsPreflight({
    allowOrigins: apiOrigins,
    allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowCredentials: true,
    allowHeaders: ['Content-Type', 'Authorization'],
  });
};

export const addCorsPreflight = (resource: cdk.aws_apigateway.Resource) => {
  resource.addCorsPreflight({
    allowOrigins: gateway.Cors.ALL_ORIGINS,
    allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowCredentials: true,
    allowHeaders: ['Content-Type', 'Authorization'],
  });
};
