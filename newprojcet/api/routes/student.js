const express = require('express');
      router = express.Router(),
      mongoose = require('mongoose'),
      multer = require('multer'),
      Student = require('../models/student'),
      StudentMutation = require('../controller/mutation/student'),
      StudentQuery = require('../controller/query/student'),
      validStud = require('../middleware/student'),
      { check, validationResult } = require('express-validator');

router.post('/',[validStud.checkNameStud,validStud.checkEmailStud],StudentMutation.addStudent);
router.get('/',StudentQuery.displayStudent);
router.get('/:StudID',StudentQuery.displayStudentByID);
router.patch('/:StudID',StudentMutation.updateStudent);
router.delete('/:StudID',StudentMutation.deleteStudent);
module.exports = router;
