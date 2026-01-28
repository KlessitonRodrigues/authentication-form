import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  STACK_NAME: 'aws-auth-api',
  AWS_REGION: process.env.AWS_REGION || '',
  AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID || '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  SECRET_KEY: process.env.SECRET_KEY || '',
};
