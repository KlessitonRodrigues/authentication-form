import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  STACK_NAME: 'aws-auth-api',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  SECRET_KEY: process.env.AUTH_SECRET_KEY || '',
};
