import { AWS, zodErrorStringify } from '@packages/common-types';
import * as jwt from 'jsonwebtoken';
import { z } from 'zod';

import { env } from '../../../contants/enviroment';
import { createResponse } from '../../../utils/api/createResponse';
import { createAuthUser, getAuthUserByEmail } from '../../dynamoDb/authTable/operations';

const signUpWithGithubSchema = z.object({
  token: z.string().min(1),
});

const githubUserUrl = 'https://api.github.com/user';
const githubEmailsUrl = 'https://api.github.com/user/emails';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body || '{}');

    const result = signUpWithGithubSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { token } = result.data;

    /**
     * 1️⃣ Fetch basic user info
     */
    const userResponse = await fetch(githubUserUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    if (userResponse.status !== 200) {
      throw new Error('Failed to fetch user info from GitHub');
    }

    const githubUser = await userResponse.json();

    /**
     * 2️⃣ Fetch user emails
     */
    const emailResponse = await fetch(githubEmailsUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    if (emailResponse.status !== 200) {
      throw new Error('Failed to fetch user emails from GitHub');
    }

    const emails = await emailResponse.json();

    const primaryEmail = emails.find((email: any) => email.primary && email.verified);

    if (!primaryEmail?.email) {
      return createResponse(401, { error: 'No verified primary email found' });
    }

    /**
     * 3️⃣ Check or create user in DynamoDB
     */
    let dbUser: any = await getAuthUserByEmail(primaryEmail.email);

    if (!dbUser) {
      dbUser = await createAuthUser({
        email: primaryEmail.email,
        password: crypto.randomUUID(), // GitHub handles auth
        userName: githubUser.name || githubUser.login,
      });
    }

    if (!dbUser) {
      return createResponse(500, { error: 'Failed to create or retrieve user' });
    }

    /**
     * 4️⃣ Create JWT
     */
    const jwtData = {
      userId: dbUser.userId,
      email: dbUser.email,
      userName: dbUser.userName,
    };

    const jwtToken = jwt.sign(jwtData, env.SECRET_KEY, { expiresIn: '1h' });

    return createResponse(200, {
      token: jwtToken,
      userId: dbUser.userId,
      email: dbUser.email,
      userName: dbUser.userName,
    });
  } catch (err: any) {
    console.error(err);
    return createResponse(500, {
      error: 'Internal server error',
      details: err?.message || err,
    });
  }
};
