export const env = {
  STACK_NAME: process.env.STACK_NAME || '',
  AWS_REGION: process.env.AWS_REGION || '',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
  AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID || '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
  SECRET_KEY: process.env.SECRET_KEY || '',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  LAMBDA_PACKAGES: ['jsonwebtoken', 'bcrypt', 'zod'],
};
