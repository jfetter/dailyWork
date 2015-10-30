"use strict"
$(document).ready(init);
function init (){

var input = [];
var numberHolder = [];

$("#equal").on("click", function(array){
	$("#display").text(array);
 		
});


//create a state operatorPressed
// let operatorPressed;
// console.log(operatorPressed)






// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
$(".numb").on("click", function(){
	var presses = $(this).text();
	input.push(presses);
	// if (operatorPressed){
	// presses = parseInt(input.join(""));
	// numberHolder = numberHolder.concat(input);
	// input = [];
	// }
 		console.log(presses);
});

};