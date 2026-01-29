import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import { AWS } from '@packages/common-types';
import * as bcrypt from 'bcrypt';

import { docClient } from '../../../config/dynamoDb';
import { resourceNames } from '../../../contants/resources';
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
      TableName: resourceNames.authTable,
      IndexName: 'emailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    });

    const result = await docClient.send(command);

    if (!result.Items || result.Items.length === 0) {
      return createResponse(401, { error: 'Invalid email or password' });
    }

    const user = result.Items[0] as any;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
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
