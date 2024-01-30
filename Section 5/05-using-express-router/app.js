// import packages
const express =  require('express');
const bodyPaser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');



const app = express();

app.use(bodyPaser.urlencoded({extended: false}));
app.use(adminRoute);
app.use(shopRoute);

app.listen(3000)