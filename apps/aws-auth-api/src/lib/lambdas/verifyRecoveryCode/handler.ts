import * as jwt from 'jsonwebtoken';

import { AWS } from '../../../../node_modules/@packages/common-types';
import { createResponse } from '../../../utils/api/createResponse';
import { getAuthUserByEmail } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, code } = jsonBody;
    if (!email || !code) {
      return createResponse(400, { error: 'Missing email or code' });
    }

    const user = await getAuthUserByEmail(email);
    if (!user) {
      return createResponse(404, { error: 'User not found' });
    }

    if (user.recoveryCode !== code || !user.recoveryCodeExpiry) {
      return createResponse(401, { error: 'Invalid recovery code' });
    }

    if (new Date() > new Date(user.recoveryCodeExpiry)) {
      return createResponse(401, { error: 'Expired recovery code' });
    }

    const newToken = jwt.sign(
      { userId: user.userId, email: user.email },
      process.env.SECRET_KEY as string,
      { expiresIn: '15m' },
    );

    return createResponse(200, { token: newToken });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
