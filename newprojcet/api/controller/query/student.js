const mongoose = require('mongoose'),
      Student = require('../../models/student'),
      {  validationResult } = require('express-validator');
    

  const displayStudent= function(req,res,next){
    Student.find()
           .then(result=>{
              res.status(200).json({
                result
              });
           })
           .catch(err=>{
              res.status(500).json({error:err});
           })
  }

const displayStudentByID = (req,res,next)=>{
    const StudentID = req.params.StudID;
    Student.findOne({'StudentID' : StudentID})
    .then(doc=>{
      if(typeof doc != 'undefined'){
        res.status(200).json({
          doc
        });
      }
      else{
        res.status(404).status({
          message:"no valid entry found"
        });
      }
      
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({error:err});
             }
      );
  }

module.exports = {
  displayStudent,displayStudentByID
}
  

