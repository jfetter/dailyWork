var a = "success";
var b = "what up";
var c = [1,2,3,4];
var d = "";

var dict = {};

str.split("").forEach(function(char){

});

console.log(reducer(a));
console.log(reducer(b));
console.log(reducer(c));
console.log(reducer(d));

var dict = str.split("").reduce(function(dict, char){
		if(!dict[char]){
		dict[char] =1;
	} else {
		dict[char] ++;
	}
	return dict; 

}, {});