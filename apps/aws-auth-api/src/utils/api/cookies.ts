import { env } from '../../contants/enviroment';

export const createTokenCookie = (token: string, expiresIn: number) => {
  const expires = new Date(Date.now() + expiresIn * 1000).toUTCString();
  const isLocalhost = env.COOKIE_DOMAIN.includes('localhost');
  const cookieOptions = [
    `token=${token}; Expires=${expires}; Domain=${env.COOKIE_DOMAIN}; Path=/; `,
  ];

  if (!isLocalhost) cookieOptions.push(`SameSite=Strict; Secure`);

  return cookieOptions.join('');
};
