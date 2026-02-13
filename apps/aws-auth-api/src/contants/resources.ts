import { env } from './enviroment';

export const resourceNames = {
  authTable: env.STACK_NAME + '-auth-table',
  authAPIGateway: env.STACK_NAME + '-auth-api-gateway',
  logGroup: env.STACK_NAME + '-log-group',
  signUpLambda: env.STACK_NAME + '-sign-up-lambda',
  signInLambda: env.STACK_NAME + '-sign-in-lambda',
  googleSignInLambda: env.STACK_NAME + '-google-sign-in-lambda',
  githubSignInLambda: env.STACK_NAME + '-github-sign-in-lambda',
  refreshTokenLambda: env.STACK_NAME + '-refresh-token-lambda',
  sendRecoveryCodeLambda: env.STACK_NAME + '-send-recovery-code-lambda',
  verifyRecoveryCodeLambda: env.STACK_NAME + '-verify-recovery-code-lambda',
  resetPasswordLambda: env.STACK_NAME + '-reset-password-lambda',
};

export const lambdaPackages = ['jsonwebtoken', 'bcrypt', 'zod'];

export const apiOrigins = [
  env.AUTH_APP_URL,
  env.DASHBOARD_APP_URL,
  'http://localhost:3000',
  'http://localhost:3001',
];
