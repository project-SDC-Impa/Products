const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', () => {
  console.log('Test Endpoint');
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});