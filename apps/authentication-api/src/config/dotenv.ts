import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
  AWS_REGION: process.env.AWS_DEFAULT_REGION || '',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  SECRET_KEY: process.env.AUTH_SECRET_KEY || '',
};
