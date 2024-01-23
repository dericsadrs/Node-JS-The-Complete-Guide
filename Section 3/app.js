//little node server
const http = require('http');

function rqListener(req, res) {

}

const server = http.createServer((req, res) => {
    // important values req.url, req.metod, req headers
    console.log(req.url, req.method, req.headers);
    //process.exit();
});

server.listen(3000);