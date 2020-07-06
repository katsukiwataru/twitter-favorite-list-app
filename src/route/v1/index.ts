import express from 'express';
import Twitter from 'twitter';
import { config } from 'dotenv';
config();

export const router = express.Router();

const twitter = new Twitter({
  consumer_key: process.env.API_KEY as string,
  consumer_secret: process.env.API_SECRET_KEY as string,
  access_token_key: process.env.ACCESS_TOKEN as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
});

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('server is up');
});

router.get('/favorites/:userId', (req: express.Request, res: express.Response) => {
  twitter.get('favorites/list', { screen_name: req.params.userId }, (error: Error, data: any) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});
