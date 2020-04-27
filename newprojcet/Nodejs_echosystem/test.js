/*
Author : Priyanka Gaikwad
Date : 27 April 2020
Purpose : Practice file.
*/


/* 1 . Arrow function  */
addition = ()=>{
	let a = 1, b=3;
	console.log(a+b);
}
addition(); //4

/* 2 . Array spread / Rest parameter  */

let arr = [1,2,3]; 
let arr2 = [4,5];
console.log([...arr,...arr2]) //1,2,3,4,5
console.log(arr.concat(arr2))//1,2,3,4,5

/* Destructuring */

var [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"


 /* promises */

 var promise = new Promise(function(resolve, reject) { 
 const x = "mphasis"; 
 const y = "mphasis"
 if(x === y) { 
 	resolve(); 
 } else { 
 	reject(); 
 } 
 }); 

 promise. 
 	then(function () { 
 		console.log('Success'); 
 	}). 
 	catch(function () { 
 		console.log('Some error has occured'); 
 	}); 


 	/* String templates */

 	var a = 45;
 	console.log(`<p>${a}</p>`);


 	/* async/await */

 	function demo(){
 			return "return async/await";
 	} 

 	async function test(){
 			var res = await demo();
 			console.log(res);
 	} 

 	test();

 	/* class fields */

 	const array1 = ['a', 'b', 'c'];
 	for (const element of array1) {
 	  console.log(element);
 	
 	}

 	/* export/import */
 	const add = function (){

 	}

 	module.exports = { add }
 	//We can use this function on anather module


