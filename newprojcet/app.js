var express = require('express');
var app = express();
const productRoutes = require('./api/routes/product'),
      orderRoutes = require('./api/routes/order'),
      userRouter = require('./api/routes/user'),
      studentRouter = require('./api/routes/student'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      helmet = require('helmet');

mongoose.connect('mongodb+srv://priyanka:Rainbow@7@cluster0-ns4j8.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology:true}
);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})
/*app.use(cors());*/
//const url = "mongodb+srv://priyanka_95:<password>@cluster0-rgnj7.mongodb.net/test?retryWrites=true&w=majority";

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(helmet())

app.use((req,res,next)=>{
	req.header('Access-Control-Allow-Origin','*');
	req.header(
		 'Access-Control-Allow-Headers',
		 "Origin,Accept,Authorozation"
		);

	if(req.method === 'OPTIONS'){
		req.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE");
		return res.status(200).json({});
	}
	next();
});


app.use('/product', productRoutes );
app.use('/orders', orderRoutes );
app.use('/user', userRouter);
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


/*app.use('/orders', orderRoutes);*/
module.exports = app;