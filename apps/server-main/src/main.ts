/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to server-main!`);
});

const port = 3333;
app.listen(port, (err: any) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
