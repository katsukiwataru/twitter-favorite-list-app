import express from 'express';
import Twitter from 'twitter';
import { router } from './route/v1';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://katsukiwataru.github.io');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials');

  if ('OPTIONS' == req.method) {
    res.send(204);
  } else {
    next();
  }
});

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
