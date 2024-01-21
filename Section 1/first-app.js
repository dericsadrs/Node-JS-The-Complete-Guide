
// import the fs module for creating fles
const fs = require('fs');

console.log("Hello from Node.js");

//create a file named hello.txt containing the text Hello from Node.js
fs.writeFileSync('hello.txt', 'Hello from Node.js');
