import express from 'express';
import fs from 'fs';
import https from 'https';
import Twitter from 'twitter';
import { router } from './route/v1';

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials');
  // res.set('Cache-Control', 'public, max-age=86400');
  res.set('Cache-Control', 'no-cache');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '86400');

  if ('OPTIONS' == req.method) {
    res.send(204);
  } else {
    next();
  }
});

const port = process.env.PORT || 3001;

app.use('/api/v1/', router);
// eslint-disable-next-line no-console
// app.listen(port, () => console.log('listen on port ' + port));

if (process.env.DEV_MODE === 'develop') {
  const option = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
  };

  const server = https.createServer(option, app);
  server.listen(port);
} else {
  app.listen(process.env.PORT || 3000);
}

export const twitter = new Twitter({
  consumer_key: process.env.API_KEY as string,
  consumer_secret: process.env.API_SECRET_KEY as string,
  access_token_key: process.env.ACCESS_TOKEN as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
});
