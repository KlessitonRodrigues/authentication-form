import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import { AWS } from '@packages/common-types';

import { docClient } from '../../../config/dynamoDb';
import { createResponse } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, password } = jsonBody;

    // Validate input
    if (!email || !password) {
      return createResponse(400, { error: 'Missing email or password' });
    }

    // Query DynamoDB for user by email using the emailIndex
    const command = new QueryCommand({
      TableName: 'Auth-Table',
      IndexName: 'emailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    });

    const result = await docClient.send(command);

    // Check if user exists
    if (!result.Items || result.Items.length === 0) {
      return createResponse(401, { error: 'Invalid email or password' });
    }

    const user = result.Items[0] as any;

    // Compare password (in production, use bcrypt to compare hashed passwords)
    if (user.password !== password) {
      return createResponse(401, { error: 'Invalid email or password' });
    }

    return createResponse(200, {
      success: true,
      token: 'token123',
      userId: user.userId,
      email: user.email,
    });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
