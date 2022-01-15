const express = require('express');
const request = require('request');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello!');
})

app.listen(port, () => console.log(`Server works on port: ${port}`))