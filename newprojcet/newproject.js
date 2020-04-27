// app.js

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/emploayee_database";
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
 /*   fs.readFile('./messge.html', function(err, data) {*/
       		if (req.url === '/form') {
       			res.writeHead(200, {'Content-Type': 'text/html'});
       			fs.createReadStream("./messge.html","UTF-8").pipe(res);
       		}
       		if (req.method === "POST") {
       			let body = '';
       			    req.on('data', chunk => {
       			        body += chunk; // convert Buffer to string
       			    });
       			    req.on('end', () => {
       			        MongoClient.connect(url,function(err , result){
       			        	var q = querystring.parse(body);
       			        	db.collecton('employee').insertOne(q,function(err , res){
       			        		if(err) throw err;
       			        		console.log("Data inserted successfully.");
       			        	});
       			        })
       			    });
       		}
       
       //res.write("<html><head><title>This is head</title></head><body><p>Hello</p></body></html>");
       /*res.write(data);
       res.write(req.url);
       res.write(req.method);
       res.end();*/
    /* });*/
    /* res.write('Node server running on port 3000');
     res.end("something");*/
    
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');