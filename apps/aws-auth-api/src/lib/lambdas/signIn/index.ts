import { AWS } from '@packages/common-types';
import * as bcrypt from 'bcrypt';

import { createResponse } from '../../../utils/api/createResponse';
import { getAuthUserByEmail } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, password } = jsonBody;

    if (!email || !password) {
      return createResponse(400, { error: 'Missing email or password' });
    }

    const user = await getAuthUserByEmail(email);
    if (!user) {
      return createResponse(401, { error: 'Invalid email or password' });
    }

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
