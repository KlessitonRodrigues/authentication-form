import {
  AWS,
  sendRecoveryCodeSchema,
  zodErrorStringify,
} from '../../../../../../packages/common-types';
import { createResponse } from '../../../utils/api/createResponse';
import { getAuthUserByEmail, updateAuthUser } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);

    const result = sendRecoveryCodeSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { email } = result.data;
    const user = await getAuthUserByEmail(email);
    if (!user || !user.userId) return createResponse(404, { error: 'User not found' });

    const recoveryCode = Math.floor(100000 + Math.random() * 900000).toString();

    await updateAuthUser(user.userId, {
      recoveryCode: recoveryCode,
      recoveryCodeExpiry: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    });

    return createResponse(200, { recoveryCode });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
