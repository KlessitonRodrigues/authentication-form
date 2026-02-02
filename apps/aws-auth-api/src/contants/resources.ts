import { env } from './enviroment';

export const resourceNames = {
  authTable: env.STACK_NAME + '-auth-table',
  authAPIGateway: env.STACK_NAME + '-auth-api-gateway',
  signUpLambda: env.STACK_NAME + '-sign-up-lambda',
  signInLambda: env.STACK_NAME + '-sign-in-lambda',
  googleSignInLambda: env.STACK_NAME + '-google-sign-in-lambda',
};
