import { AWS, Auth } from '../../../../node_modules/@packages/common-types';
import { createResponse } from '../../../utils/api/createResponse';
import { createAuthUser } from '../../dynamoDb/authTable/operations';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body);
    const { email, password, userName } = jsonBody as Auth.SignUpRequest;
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
