import 'dotenv/config';
import express, { Express } from 'express';
import router from './src/routes/index';
import bodyParser from 'body-parser';

const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
  next();
});

// routes
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
