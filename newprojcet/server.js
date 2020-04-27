/*
Author : Priyanka Gaikwad
Date : 22 April 2020
File : Server connection.
*/

var http = require('http');
var app = require('./app');
let data = http.createServer(app);
data.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

module.exports = data