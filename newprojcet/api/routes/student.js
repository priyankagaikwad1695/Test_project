const express = require('express');
      router = express.Router(),
      mongoose = require('mongoose'),
      multer = require('multer'),
      Student = require('../models/student'),
      addStudent = require('../controller/student'),
      validStud = require('../middleware/student'),
      { check, validationResult } = require('express-validator');

router.post('/',[validStud.checkNameStud,validStud.checkEmpIDStud],addStudent.addStudent);
module.exports = router;
