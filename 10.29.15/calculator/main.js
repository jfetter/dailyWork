"use strict"
$(document).ready(init);
function init (){

var numbInput = "";
var numberHolder = [];
var operatorHolder = []; 

$("#equal").on("click", function(array){
	$("#display").text(array);
 		
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
	var opPresses = $(this).text();
	operatorHolder.push(opPresses);
	var operatorPressed = true;
	console.log(operatorHolder);
	triggerOperation();
}

function triggerOperation () {
		if($(this).text() == "clear"){
		 numbInput = "";
		 numberHolder = [];
		 operatorHolder = [];
		 console.log("triggered clear");
		}
}



// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
$(".numb").on("click", function(){
	var numbPresses = $(this).text();
	numbInput += numbPresses;
 if (operatorHolder.length > 0){
	numberHolder.push(numbInput);
  numbInput = [];
   	console.log("numbHolder:" , numberHolder)
 }
 		console.log(numbInput);
 		$("#display").text(numbInput);
});
 		
};