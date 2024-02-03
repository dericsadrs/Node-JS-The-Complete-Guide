const express = require('express');
const path = require('path') ;
const bodyParser = require('body-parser');

const app = express();
const homeRoute = require('./routes/index');



app.use(bodyParser.urlencoded({extended: false}));


app.use(homeRoute);

app.listen(3000);


