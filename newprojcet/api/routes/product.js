const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  multer = require('multer'),
	  Product = require('../models/product');

const storage = multer.diskStorage({

	destination:function(req,file,cb){
		cb(null , './uploads/');
	},
	filename:function(req,file,cb){
		cb(null , new Date().toISOString() + file.originalname);
	}
});
const upload = multer({storage:storage});

router.get('/',(req,res,next)=>{
	Product.find()
			.select("name price")
			.exec()
			.then(doc=>{
				res.status(200).json({
					doc
				});
			})
			.catch(err=>{
				res.status(500).json({error:err});
			})
	
});

router.post('/',upload.single('productImage'),(req,res,next)=>{
	console.log(req.file);
	const productData = {
		name:req.body.name,
		price:req.body.price
	};
	const productNew = new Product({
		_id : new mongoose.Types.ObjectId(),
		name:req.body.name,
		price : req.body.price
	});
	productNew.save() 
	.then(result=>{
		res.status(200).json({
			message:'Handling post request of product',
			product:result
		});
	})
	.catch(err=>{
		console.log(err);
		res.status(200).json({
			error:err
		});
	});
	
});
router.get('/:productId',(req,res,next)=>{
	const id = req.params.productId;
	Product.findById(id)
	.exec()
	.then(doc=>{console.log(doc);
		if(doc){
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
	
	/*if(id === 'special'){
		res.status(200).json({
			message:"You discovered special Id",
			id:id
		});
	}
	else{
		res.status(200).json({
			message:"You discovered special Id"
		});
	}*/
});

router.patch('/:productId',(req,res,next)=>{
	res.status(200).json({
		message:"Updated product",
	});
});


router.delete('/:productId',(req,res,next)=>{
	res.status(200).json({
		message:"Delete product",
	});
});

module.exports = router;
