const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      Student = require('../models/student'),
      {  validationResult } = require('express-validator');
      

    exports.addStudent = function(req,res,next){
      const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.array() });
       }
       else{
          const StudentData = new Student({
                _id : new mongoose.Types.ObjectId(),
                name : req.body.name,
                empID : req.body.empID
            });
            StudentData.save()
            .then(result=>{
                res.status(200).json({
                    message:'Handling post request of product',
                    Student:result
                });
            })
            .catch(err=>{
                console.log(err);
                res.status(200).json({
                    error:err
                });
            });

       }
    	
     };

     //module.exports =  addStudent ;

