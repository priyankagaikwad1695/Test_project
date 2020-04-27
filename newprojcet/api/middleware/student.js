const express = require('express'),
      { check, validationResult } = require('express-validator');
      

    const checkNameStud = check('name')
            .not()
            .isEmpty()
            .withMessage('Name is required');


    const checkEmpIDStud = check('empID')
            .not()
            .isEmpty()
            .withMessage('Employee ID is required');
            
    module.exports = { checkNameStud ,  checkEmpIDStud} ;

     

