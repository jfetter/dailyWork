// make all numbers in an array negative; 


var array = [-1, 1, 2, -2, -3, 3, 0]
function beNegative(array){
 	
 	var negative = array.map(function(item, index, all){
 		if (item < 0){
 		item *= -1; 
 	} 
 	return item;
 	});
 	return negative; 
}

console.log(beNegative(array));