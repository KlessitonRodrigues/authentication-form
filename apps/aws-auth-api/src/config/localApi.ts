import './dotenv'; // sort-imports-ignore

import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { handler as signIn } from '../lib/lambdas/signIn/handler';
import { handler as signUp } from '../lib/lambdas/signUp/handler';
import { handler as googleAuth } from '../lib/lambdas/googleSignIn/handler';
import { handler as refreshToken } from '../lib/lambdas/refreshToken/handler';
import { handler as sendRecoveryCode } from '../lib/lambdas/sendRecoveryCode/handler';
import { handler as verifyRecoveryCode } from '../lib/lambdas/verifyRecoveryCode/handler';
import { handler as resetPassword } from '../lib/lambdas/resetPassword/handler';
import { createLambdaEvent } from '../utils/api/localApi';

const localRoutes = () => {
  const router = express.Router();
  router.post('/auth/signin', createLambdaEvent(signIn));
  router.post('/auth/signup', createLambdaEvent(signUp));
  router.post('/auth/google', createLambdaEvent(googleAuth));
  router.post('/auth/refresh-token', createLambdaEvent(refreshToken));
  router.post('/auth/send-recovery-code', createLambdaEvent(sendRecoveryCode));
  router.post('/auth/verify-recovery-code', createLambdaEvent(verifyRecoveryCode));
  router.post('/auth/reset-password', createLambdaEvent(resetPassword));
  return router;
};

const localApi = async () => {
  const app = express();
  const routes = localRoutes();
  const port = 3005;

  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use(
    cors({
      credentials: true,
      origin: (_, callback) => callback(null, true),
    }),
  );
  app.use(routes);
  app.listen(port, () => console.log('Running at: http://localhost:' + port));
};

localApi();
