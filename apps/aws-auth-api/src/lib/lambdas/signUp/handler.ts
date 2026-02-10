import { AWS, signUpSchema, zodErrorStringify } from '@packages/common-types';

import { createResponse } from '../../../utils/api/createResponse';
import { createAuthUser } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const result = signUpSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { email, password, userName } = result.data;

    try {
      await createAuthUser({ email, password, userName });
    } catch (err: any) {
      return createResponse(400, { error: 'Error creating user', details: err?.message || err });
    }

    return createResponse(201, { message: 'User registered successfully' });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
