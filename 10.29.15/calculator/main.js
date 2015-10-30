$(document).ready(init);
function init (){
	"use strict"
	console.log("ready");
}

var input = [];
var numberHolder = [];

// var nine = 
// var eight =
// var seven =
// var six =
// var five =
// var four =
// var three =
// var two = 
// var one = 
// var zero = $("zero").text();


$("#equal").on("click", function(array){
	$("#display").text(array);
 		
});

// only grab numbers until an operator is pushed
// then push what you've got to a temporary array to operate on)
$(".numb").on("click", function(keyPressed){
	var presses = input.push($(this).text());
	presses = input.join(""));
});

