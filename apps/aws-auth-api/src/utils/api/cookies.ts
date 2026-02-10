import { env } from '../../contants/enviroment';

export const createTokenCookie = (token: string, expiresIn: number) => {
  const expires = new Date(Date.now() + expiresIn * 1000).toUTCString();
  const isLocalhost = String(env.AUTH_APP_URL).includes('localhost');
  const cookieOptions = [`token=${token}; Expires=${expires}; Path=/; `];
  if (!isLocalhost) cookieOptions.push(`SameSite=None; Secure`);

  return cookieOptions.join('');
};
