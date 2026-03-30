import { AWS, zodErrorStringify } from '@packages/common-types';
import * as jwt from 'jsonwebtoken';
import { z } from 'zod';

import dotenv from '../../../contants/dotenv';
import { createResponse } from '../../../utils/api/createResponse';
import { createAuthUser, getAuthUserByEmail } from '../../dynamoDb/authTable/operations';

const signUpWithGithubSchema = z.object({
  code: z.string().min(1),
});

const githubTokenUrl = 'https://github.com/login/oauth/access_token';
const githubEmailsUrl = 'https://api.github.com/user/emails';

export const handler: AWS.APIGatewayHandler = async event => {
  try {
    const jsonBody = JSON.parse(event.body || '{}');

    const result = signUpWithGithubSchema.safeParse(jsonBody);

    if (!result.success) {
      const details = zodErrorStringify(result);
      return createResponse(400, { error: 'Invalid request body', details });
    }

    const { code } = result.data;

    const tokenRes = await fetch(githubTokenUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: dotenv.GITHUB_CLIENT_ID,
        client_secret: dotenv.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    if (tokenRes.status !== 200) {
      throw new Error('Failed to fetch access token from GitHub');
    }

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return createResponse(400, { error: 'No access_token', tokenData });
    }

    const accessToken = tokenData.access_token;

    const userResp = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'your-app-name',
      },
    });

    const user = await userResp.json();

    let emails = [];
    const emailResp = await fetch(githubEmailsUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'your-app-name',
      },
    });

    if (emailResp.status === 200) {
      emails = await emailResp.json();
    }

    const primaryEmail = emails.find((e: any) => e.primary && e.verified);

    if (!primaryEmail) {
      return createResponse(400, { error: 'No verified primary email found in GitHub account' });
    }

    let dbUser: any = await getAuthUserByEmail(primaryEmail.email);

    if (!dbUser) {
      dbUser = await createAuthUser({
        email: primaryEmail.email,
        password: crypto.randomUUID(), // GitHub handles auth
        userName: user.name || user.login,
      });
    }

    if (!dbUser) {
      return createResponse(500, { error: 'Failed to create or retrieve user' });
    }

    const jwtData = {
      userId: dbUser.userId,
      email: dbUser.email,
      userName: dbUser.userName,
    };

    const jwtToken = jwt.sign(jwtData, dotenv.SECRET_KEY, { expiresIn: '1h' });

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
