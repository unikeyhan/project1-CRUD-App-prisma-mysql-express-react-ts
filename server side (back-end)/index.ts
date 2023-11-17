import 'dotenv/config';
import express, { Express } from 'express';
import router from './src/routes/index';
import bodyParser from 'body-parser';

const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// routes
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
