const express = require('express');
const path = require('path') ;
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routes/users');
const homeRoute = require('./routes/index');



app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoute);
app.use(homeRoute);

app.listen(3000);


