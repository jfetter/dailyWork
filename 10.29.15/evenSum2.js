// var i = [1,2,3,4,5,6];
// var j = [];
// var k = [7,7, 3,];

// function evenizer(array){
// 	return array.reduce(function(acc, item, index){
//  		if (item %2 === 0){
//  			return acc + item; 
//  		}
//  		else return acc; 
// 	}, 0)
// }

var i = [1,2,3,4,5,6];
var j = [];
var k = [7,7, 3,]; 

function evenizer(array){
		var n = 0;
	array.forEach(function(item, index){
 		if (item %2 === 0){
 			n += item;
 		} 
	});
	return n; 
}

console.log(evenizer(j));
console.log(evenizer(k));
