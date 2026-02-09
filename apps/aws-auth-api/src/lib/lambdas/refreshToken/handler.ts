import * as jwt from 'jsonwebtoken';

import {
  AWS,
  refreshTokenSchema,
  zodErrorStringify,
} from '../../../../../../packages/common-types';
import { env } from '../../../contants/enviroment';
import { createResponse } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);

    const result = refreshTokenSchema.safeParse(jsonBody);
    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { token } = result.data;
    if (!token) {
      return createResponse(400, { error: 'Missing token' });
    }

    let decodedToken: any;
    try {
      decodedToken = jwt.verify(token, env.SECRET_KEY as string);
    } catch (err) {
      return createResponse(401, { error: 'Invalid or expired token' });
    }

    const newToken = jwt.sign(
      { userId: decodedToken.userId, email: decodedToken.email },
      env.SECRET_KEY as string,
      { expiresIn: '1h' },
    );

    return createResponse(200, { token: newToken });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
