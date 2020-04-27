const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	name:{type:String},
	empID:{type:Number, required : true}
});
module.exports=mongoose.model('Student',productSchema);