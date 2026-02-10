import { AWS, resetPasswordSchema, zodErrorStringify } from '@packages/common-types';
import * as jwt from 'jsonwebtoken';

import { env } from '../../../contants/enviroment';
import { createResponse } from '../../../utils/api/createResponse';
import { updateAuthUser } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const result = resetPasswordSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { token, newPassword } = result.data;

    if (!token || !newPassword) {
      return createResponse(400, { error: 'Missing token or newPassword' });
    }

    const decodedToken = jwt.verify(token, env.SECRET_KEY) as { email: string; userId: string };

    const newUser = await updateAuthUser(decodedToken.userId, {
      password: newPassword,
      recoveryCode: '',
      recoveryCodeExpiry: '',
    });

    return createResponse(200, { code: { newUser } });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
