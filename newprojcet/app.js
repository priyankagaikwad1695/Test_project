/*
Author : Priyanka Gaikwad
Date : 22 April 2020
File : All database connection and required library imported.
*/

var express = require('express');
var app = express();
const studentRouter = require('./api/routes/student'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      helmet = require('helmet');

// Mongodb connect
mongoose.connect('mongodb+srv://priyanka:Rainbow@7@cluster0-ns4j8.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology:true}
);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(helmet())
app.use(cors());

app.use('/student', studentRouter);

app.use((req,res,next)=>{
	const error = new error('Not found');
	error.status=404;
	next(error);
});

app.use((error,req,res,next)=>{
	res.status(error.status || 500);
	res.json({
		message:error.message
	});
});

module.exports = app;