import { AWS } from '../../../../../../packages/common-types';
import { createResponse } from '../../../utils/api/createResponse';
import { getAuthUserByEmail, updateAuthUser } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email } = jsonBody;
    if (!email) return createResponse(400, { error: 'Missing email' });

    const user = await getAuthUserByEmail(email);
    if (!user) return createResponse(404, { error: 'User not found' });

    const recoveryCode = Math.floor(100000 + Math.random() * 900000).toString();

    await updateAuthUser(user.userId, {
      recoveryCode: recoveryCode,
      recoveryCodeExpiry: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    });

    return createResponse(200, { code: { recoveryCode } });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
