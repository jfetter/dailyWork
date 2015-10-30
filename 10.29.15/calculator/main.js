"use strict"
$(document).ready(init);
function init (){

var numbInput = [];
var numberHolder = [];
var operatorHolder = []; 

$("#equal").on("click", function(array){
	$("#display").text(array);
 		
});

// let operatorPressed =()=>{
//  	return true; 

// };


//create a state operatorPressed

//define variable operatorPressed;
// let operatorPressed;
// let $e = $(event.target);
// $e.text(operatorPressed);
// $e.data("clicked", operatorPressed);
// console.log("e +" + $e + "operatorPressed:" + operatorPressed)
		

$(".operator").on("click", function(){
	var opPresses = $(this).text();
	operatorHolder.push(opPresses);
	console.log(operatorHolder);
});



// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
$(".numb").on("click", function(){
	var numbPresses = $(this).text();
	numbInput.push(numbPresses);
	// if (operatorPressed){
	// numbPresses = parseInt(numbInput.join(""));
	numberHolder.push();
	// numbInput = [];
	// }
 		console.log(numbInput);
});

};