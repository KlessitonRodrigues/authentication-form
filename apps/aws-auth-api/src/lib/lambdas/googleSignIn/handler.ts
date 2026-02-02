import * as jwt from 'jsonwebtoken';

import { AWS } from '../../../../../../packages/common-types';
import { env } from '../../../contants/enviroment';
import { createResponse } from '../../../utils/api/createResponse';
import { createAuthUser, getAuthUserByEmail } from '../../dynamoDb/authTable/operations';

const userInfoUrl = 'https://www.googleapis.com/oauth2/v2/userinfo';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { token } = jsonBody;

    if (!token) return createResponse(400, { error: 'Token is required' });

    const userInfoResponse = await fetch(userInfoUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (userInfoResponse.status !== 200) {
      throw new Error('Failed to fetch user info from Google');
    }

    const userData = await userInfoResponse.json();

    if (!userData?.verified_email) {
      return createResponse(401, { error: 'Email not verified' });
    }

    let dbUser: any = {};
    dbUser = await getAuthUserByEmail(userData.email);

    if (!dbUser) {
      dbUser = await createAuthUser({
        email: userData.email,
        password: crypto.randomUUID(), // Random password since Google handles auth
        userName: userData.name,
      });
    }

    if (!dbUser) {
      return createResponse(500, { error: 'Failed to create or retrieve user' });
    }

    const jwtToken = jwt.sign({ email: dbUser.email, name: dbUser.userName }, env.SECRET_KEY, {
      expiresIn: '1h',
    });

    return createResponse(200, {
      token: jwtToken,
      userId: dbUser.userId,
      email: dbUser.email,
      userName: dbUser.userName,
    });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
