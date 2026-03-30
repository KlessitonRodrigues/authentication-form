import { AWS } from '@packages/common-types';

import { clearTokenCookie } from '../../../utils/api/cookies';
import { createResponse, createResponseWithOrigin } from '../../../utils/api/createResponse';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const origin = event.headers.origin || '';
    const emptyCookie = clearTokenCookie();

    return createResponseWithOrigin(
      origin,
      200,
      { message: 'Signed out successfully' },
      { 'Set-Cookie': emptyCookie },
    );
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
