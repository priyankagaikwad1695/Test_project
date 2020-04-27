const express = require('express'),
      { check, validationResult } = require('express-validator');
      

    const checkNameStud = check('Name')
            .not()
            .isEmpty()
            .withMessage('Name is required');


    const checkEmailStud = check('Email')
            .not()
            .isEmpty()
            .withMessage('Email is required');
            
    module.exports = { checkNameStud ,  checkEmailStud} ;

     

