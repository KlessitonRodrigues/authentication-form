import { AWS } from '../../../../../../packages/common-types';
import { createResponse } from '../../../utils/api/createResponse';

const userInfoUrl = 'https://www.googleapis.com/oauth2/v2/userinfo';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { token } = jsonBody;

    if (!token) return createResponse(400, { error: 'Token is required' });

    const userInfoResponse: any = await fetch(userInfoUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (userInfoResponse.statusCode !== 200) {
      throw new Error('Failed to fetch user info from Google');
    }

    const userData = JSON.parse(userInfoResponse.body);

    const user = {
      email: userData.email,
      name: userData.name,
      email_verified: userData.verified_email,
    };

    if (!user?.email_verified) {
      return createResponse(401, { error: 'Email not verified' });
    }

    console.log('Google user authenticated:', user);

    return createResponse(200, { success: true, user });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
