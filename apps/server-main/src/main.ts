/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/welcome', (req, res) => {
  res.json({ message: 'Welcome to server-main!' });
});

app.get('/counter', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream'
  });
  let counterValue = 0;
  const interval = setInterval(() => {
    const currentCounterValue = counterValue++;
    const response = { counterValue: currentCounterValue };
    res.write(
      `id:${currentCounterValue}\nevent:counter\ndata:${JSON.stringify(
        response
      )}\n\n`
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});

const port = 3333;
app.listen(port, (err: any) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
