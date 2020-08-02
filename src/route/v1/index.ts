import express from 'express';
import { twitter } from '../..';

export const router = express.Router();

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
