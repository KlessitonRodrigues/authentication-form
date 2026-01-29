import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { AWS, Auth } from '@packages/common-types';

import { docClient } from '../../../config/dynamoDb';
import { createResponse } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, password, user_name } = jsonBody as Auth.SignUp;
    if (!email || !password || !user_name) {
      return createResponse(400, { error: 'Missing required fields: email, password, user_name' });
    }

    const params = {
      TableName: process.env.AUTH_TABLE_NAME!,
      Item: {
        id: crypto.randomUUID(),
        email,
        user_name,
        password, // Note: In a real application, never store plain text passwords. Always hash them before storing.
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      ConditionExpression: 'attribute_not_exists(email)', // Prevents overwriting existing users
    };

    await docClient.send(new PutCommand(params));

    return createResponse(201, { message: 'User registered successfully' });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
