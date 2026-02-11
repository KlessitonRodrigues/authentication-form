import { env } from '../../contants/enviroment';

export const cookieToObject = (cookie: string) => {
  return cookie.split(';').reduce(
    (acc, part) => {
      const [key, value] = part.trim().split('=');
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
};

export const createTokenCookie = (token: string, expiresIn: number) => {
  const expires = new Date(Date.now() + expiresIn * 1000).toUTCString();
  const isLocalhost = String(env.AUTH_APP_URL).includes('localhost');
  const cookieOptions = [`token=${token}; Expires=${expires}; Path=/; `];
  if (!isLocalhost) cookieOptions.push(`SameSite=None; Secure`);

  return cookieOptions.join('');
};
