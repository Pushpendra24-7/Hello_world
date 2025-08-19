const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello Pushpendra !</title>
      <style>
        body {
          background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: #fff;
          padding: 40px 60px;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          color: #0078d7;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          color: #333;
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello World!</h1>
        <p>Welcome to your Express.js app 🎉</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
