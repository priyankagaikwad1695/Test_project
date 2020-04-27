const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/student');
const Product = require('../models/product');

router.get('/',(req,res,next)=>{
		Order.find()
		     .select("product quantity _id")
		     .populate("product","id name price")
			 .exec()
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
});

router.get('/:orderId',(req,res,next)=>{
	const OrderId = req.params.orderId;
		Order.findById(OrderId)
			 .exec()
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
});

router.post('/',(req,res,next)=>{

	console.log("hiiiiii");

	const order = new Order({
		_id : new mongoose.Types.ObjectId(),
		quanity : req.body.quanity,
		product : req.body.productId
	});
	console.log("nooo",order);
	order.save()
	.then(result=>{
		res.status(200).json({
			result
		});
	})
	.catch(err=>{
		res.status(500).json({
			error:err
		});
	})

});

module.exports = router;