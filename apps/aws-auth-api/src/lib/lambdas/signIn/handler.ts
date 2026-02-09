import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { AWS, signInSchema, zodErrorStringify } from '../../../../../../packages/common-types';
import { env } from '../../../contants/enviroment';
import { createResponse } from '../../../utils/api/createResponse';
import { getAuthUserByEmail } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const result = signInSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { email, password } = result.data;
    const user = await getAuthUserByEmail(email);

    if (!user) {
      return createResponse(401, { error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password || '');
    if (!isPasswordValid) {
      return createResponse(401, { error: 'Invalid email or password' });
    }

    const jwtToken = jwt.sign({ userId: user.userId, email: user.email }, env.SECRET_KEY, {
      expiresIn: '1h',
    });

    return createResponse(200, {
      token: jwtToken,
      userId: user.userId,
      email: user.email,
    });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, { error: 'Internal server error', details: err?.message || err });
  }
};
