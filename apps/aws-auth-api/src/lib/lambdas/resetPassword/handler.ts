import { AWS } from '../../../../../../packages/common-types';
import { createResponse } from '../../../utils/api/createResponse';
import { updateAuthUser } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { userId, password } = jsonBody;
    if (!userId || !password) return createResponse(400, { error: 'Missing userId or password' });

    const newUser = await updateAuthUser(userId, {
      password: password,
      recoveryCode: '',
      recoveryCodeExpiry: '',
    });

    return createResponse(200, { code: { newUser } });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
