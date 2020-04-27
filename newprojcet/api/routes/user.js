const express = require('express');
const app = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

app.get('/',(req,res,next)=>{
	User.find()
	    .exec()
	    .then(users=>{
	    	res.status(200).json({
	    		users
	    	});
	    })
	    .catch(err=>{
	    	res.status(500).json({
	    		error:err
	    	});

	    });
});

app.post('/signup',(req,res,next)=>{

	User.find({email : req.body.email})
	     .exec()
	     .then(users=>{
	     	if(users.length >= 1){
	     		res.status(200).json({
                  message : users
	     		});
	     	}
	     	else{
             bcrypt.hash('password' , 10 , function(err,hash){
             			if(err){
             				res.status(500).json({
             					error:err
             				});
             			}
             			else{
             				const user = new User({
             					_id : new mongoose.Types.ObjectId,
             					email : req.body.email,
             					password : hash
             				});

             				user.save()
             				    .then(docs=>{
             				    	res.status(200).json({
             				    		docs
             				    	});
             				    })
             				    .catch(err=>{
             				    	res.status(500).json({
             				    		error:err
             				    	});
             				    });
             			}
             		});
	     	}
	     })
	     .catch(err=>{
	     	res.status(500).json({
	     		error:err
	     	});
	     });
	

});

app.post('/login',(req,res,next)=>{
	User.find({email:req.body.email})
	    .exec()
	    .then(users=>{
	    	if(users.length < 1){
	    		res.status(401).json({
	    			message:"Auth failed"
	    		});
	    	}

	    		bcrypt.compare(req.body.password, users[0].password, function(err, result) {
	    	  if(err) {
	    	   res.status(500).json({
	    	   	    		error:err
	    	   	    	});
	    	  } 
	    	  if(result){
	    	  	 res.status(500).json({
	    	  		    		   	    		message:"Auth sucessfull"
	    	  		    		   	    	});
	    	  }
	    	  /*res.status(500).json({
	    	  	    		messgae:"Auth failed"
	    	  	    	});*/
	    	   
	    	});
	    		
	    })
	    .catch(err=>{
	    	res.status(500).json({
	    		error:err
	    	});

	    });
});
module.exports = app;

