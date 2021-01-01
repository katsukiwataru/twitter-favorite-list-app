import express from 'express';
import { twitter } from '../..';

export const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('server is up');
});

router.get('/users/', (req: express.Request, res: express.Response) => {
  twitter.get('users/show', { screen_name: req.query.screenName }, (error: Error, data: any) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.get('/favorites/', (req: express.Request, res: express.Response) => {
  twitter.get('favorites/list', { screen_name: req.query.screenName }, (error: Error, data: any) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});
