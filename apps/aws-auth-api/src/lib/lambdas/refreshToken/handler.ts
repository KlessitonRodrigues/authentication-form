import { AWS, refreshTokenSchema, zodErrorStringify } from '@packages/common-types';
import * as jwt from 'jsonwebtoken';

import { env } from '../../../contants/enviroment';
import { createTokenCookie } from '../../../utils/api/cookies';
import { createResponse, createResponseWithOrigin } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const origin = event.headers.origin || '*';
    console.log('Received refresh token request from origin:', origin);
    const jsonBody = JSON.parse(event.body);
    const result = refreshTokenSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponseWithOrigin(origin, 400, { error: 'Invalid request body', details });
    }

    const { token } = result.data;
    if (!token) {
      return createResponseWithOrigin(origin, 400, { error: 'Missing token' });
    }

    let decodedToken: any;
    try {
      decodedToken = jwt.verify(token, env.SECRET_KEY as string);
    } catch (err) {
      return createResponseWithOrigin(origin, 401, { error: 'Invalid or expired token' });
    }

    const jwtData = {
      userId: decodedToken.userId,
      email: decodedToken.email,
      userName: decodedToken.userName,
    };
    const jwtToken = jwt.sign(jwtData, env.SECRET_KEY, { expiresIn: '1h' });

    const cookie = createTokenCookie(jwtToken, 3600);
    return createResponseWithOrigin(origin, 200, { user: jwtData }, { 'Set-Cookie': cookie });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
