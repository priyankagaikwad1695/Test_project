/*
  * CreatedBy : Priyanka Gaikwad
  * CreatedDate : 22-04-2020
  * Purpose : Created Student schema
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaType = Schema.Types;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
const StudentSchema = new Schema({
    StudentID: {  type: Number,   exists: false, unique : true },
    Name:{type:String},
    Email:{type:String, required : true},
    CreatedDate:  { type: Date, default: Date.now },
    ModifiedDate:  { type: Date, default: Date.now }
});

StudentSchema.plugin(autoIncrement.plugin, { model: 'Student', field: 'StudentID',startAt: 1 });
module.exports = mongoose.model('Student',StudentSchema );
