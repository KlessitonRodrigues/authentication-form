import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { AWS, Auth } from '@packages/common-types';
import * as crypto from 'crypto';

import { docClient } from '../../../config/dynamoDb';
import { env } from '../../../contants/enviroment';
import { createResponse } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, password, userName } = jsonBody as Auth.SignUp;
    if (!email || !password || !userName) {
      return createResponse(400, { error: 'Missing required fields: email, password, userName' });
    }

    const params = {
      TableName: 'Auth-Table',
      Item: {
        userId: crypto.randomUUID(),
        email,
        userName,
        password: crypto
          .createHmac('sha256', env.SECRET_KEY || '')
          .update(password)
          .digest('hex'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      ConditionExpression: 'attribute_not_exists(email)',
    };

    await docClient.send(new PutCommand(params));

    return createResponse(201, { message: 'User registered successfully' });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
