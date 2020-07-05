import express from 'express';
import { router } from './route/v1';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use('/api/v1/', router);
// eslint-disable-next-line no-console
app.listen(port, () => console.log('listen on port ' + port));
