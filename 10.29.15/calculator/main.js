"use strict"
$(document).ready(init);
function init (){

var numbInput = "";
var numberHolder = [];
var operatorHolder = []; 

$("#equal").on("click", function(array){
	var answer = "";

	$("#display").text(answer);
 		
});




//create a state operatorPressed

//define variable operatorPressed;
// let operatorPressed;
// let $e = $(event.target);
// $e.text(operatorPressed);
// $e.data("clicked", operatorPressed);
// console.log("e +" + $e + "operatorPressed:" + operatorPressed)
		

$(".operator").on("click", operatorPressed);

function operatorPressed(){
		if (operatorHolder <= 1) {
		var opPresses = $(this).text();
		operatorHolder.push(opPresses);
		var operatorPressed = true;
 		$("#display").text(numbInput + operatorHolder);
		console.log(operatorHolder);
		if (this.class === "pseudoOp"){
		preformPseudoOperation();
		}
	}
}

function preformPseudoOperation () {
	  var itemText = this.text;
	console.log("this text:" +  itemText);
		if(itemText === "clear"){
		 numbInput = "";
		 numberHolder = [];
		 operatorHolder = [];
		 console.log("triggered clear");
		}
// else if(itemText === "+/-"){
//  	 numberHolder = parseInt(numberHolder) * -1; 
// }
// else if(itemText === ".")
// 	{numberHolder += ".";}
} // end preformPseudoOperation;



// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
$(".numb").on("click", function(){
	var numbPresses = $(this).text();
	numbInput += numbPresses;
 if (operatorHolder.length === 1){
	numberHolder.push(numbInput);
  numbInput = [];
   	console.log("numbHolder:" , numberHolder)
 }
 		console.log(numbInput);
 		$("#display").text(numbInput);
});
 		
};