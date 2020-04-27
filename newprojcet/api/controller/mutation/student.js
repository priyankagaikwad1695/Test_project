const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      Student = require('../../models/student'),
      {  validationResult } = require('express-validator');
      

   const addStudent = function(req,res,next){
      const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.array() });
       }
       else{
          const StudentData = new Student({
                Name : req.body.Name,
                Email : req.body.Email
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

     const deleteStudent = function(req,res,next){
        const StudID = req.params.StudID;
        Student.findOne({'StudentID' :StudID })
               .remove()
               .then(result=>{
                               res.status(200).json({
                                   message:'Student deleted successfully.',
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

     const updateStudent = (req,res,next)=>{
        const StudentData = {
              Name : req.body.Name,
              Email : req.body.Email
          };
        const StudID = req.params.StudID;
            if(typeof StudID != "undefined" &&  StudID != 0 ) {
                  Student.findOneAndUpdate(
                         {$and: [{  "StudentID": StudID }]},
                         StudentData,
                         { new: true,  returnNewDocument: true }
                      ).then(result=>{
                               res.status(200).json({
                                   message:'Student Updated successfully.',
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
            else
            {
              res.status(200).json({
                message:"Student ID not defined.",
              });
            }
    }

 
     module.exports =  {addStudent , deleteStudent , updateStudent};

