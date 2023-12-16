const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/movies', (req, res) => {
  res.send('call me daddy')
})
app.get('/tv', (req, res) => {
  res.send('call me baby')
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
