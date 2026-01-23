import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import '../config/dotenv';
import { handler as googleAuth } from '../lib/lambdas/authentication/googleAuth/index';
import { createLambdaEvent } from '../utils/api/localApi';

const localRoutes = () => {
  const router = express.Router();
  // router.get('/proxy', createLambdaEvent(corsProxy));
  router.post('/auth', createLambdaEvent(googleAuth));
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
