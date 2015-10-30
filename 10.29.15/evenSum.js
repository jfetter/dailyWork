
var a = [];
var b = [7,10,8,1,2,3,4,5,6];
var c = [9,9,9,9,9];
var d = [2, 4, 6, 8, 10, 12, 18];

function reducer(array){
var reduced = array.reduce(function(accumulator, item, index){ 
   if (item % 2 > 0){
   		item = 0; 
   }
   return accumulator + item;
},0);
return reduced; 
}

console.log(reducer(a));
console.log(reducer(b));
console.log(reducer(c));
console.log(reducer(d));