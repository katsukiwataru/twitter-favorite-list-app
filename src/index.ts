import express from 'express';
import Twitter from 'twitter';
import { router } from './route/v1';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use('/api/v1/', router);
// eslint-disable-next-line no-console
app.listen(port, () => console.log('listen on port ' + port));

export const twitter = new Twitter({
  consumer_key: process.env.API_KEY as string,
  consumer_secret: process.env.API_SECRET_KEY as string,
  access_token_key: process.env.ACCESS_TOKEN as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
});
