import './dotenv'; // sort-imports-ignore

import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { handler as signInFn } from '../lib/lambdas/signIn';
import { handler as signUpFn } from '../lib/lambdas/signUp';
import { createLambdaEvent } from '../utils/api/localApi';

const localRoutes = () => {
  const router = express.Router();
  router.post('/auth/signin', createLambdaEvent(signInFn));
  router.post('/auth/signup', createLambdaEvent(signUpFn));
  // router.post('/auth/google', createLambdaEvent(googleAuth));
  return router;
};

const localApi = async () => {
  const app = express();
  const routes = localRoutes();
  const port = 3005;

  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use(cors());
  app.use(routes);
  app.listen(port, () => console.log('Running at: http://localhost:' + port));
};

localApi();
