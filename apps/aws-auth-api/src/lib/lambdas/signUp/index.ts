import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { AWS, Auth } from '@packages/common-types';
import * as bcrypt from 'bcrypt';

import { docClient } from '../../../config/dynamoDb';
import { resourceNames } from '../../../contants/resources';
import { createResponse } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, password, userName } = jsonBody as Auth.SignUp;
    if (!email || !password || !userName) {
      return createResponse(400, { error: 'Missing required fields: email, password, userName' });
    }

    const params = {
      TableName: resourceNames.authTable,
      Item: {
        userId: crypto.randomUUID(),
        email,
        userName,
        password: await bcrypt.hash(password, 12),
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
