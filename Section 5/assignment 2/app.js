const express = require('express');


const app = express();

// app.use((req,res, next) => {
//     console.log('First Middleware');
//     next();
// })

// app.use((req,res, next) => {
//     console.log('Second Middleware');
//     res.send("<p>Assignment Solved</p>");
// })

app.use('/users', (req,res,next) =>{
    console.log("/ called")
    res.send("<p>This is the middleware that handles '/users'</p>")
})

app.use('/', (req,res,next) =>{
    console.log("/users  called")
    res.send("<p>This is the middleware that handles '/'</p>")
})



app.listen(3000);