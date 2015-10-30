 var a = [ 10, 1,2,3,4,5,6,7,8,9];

// var b = a.concat();

// console.log('a:', a);
// console.log("b:", b);
function sample(array){
 	var index = Math.floor(Math.random() * array.length);
  	return array[index];
}


function shuffle(array){
	array = array.concat();
	var shuffled= [];

	while(array.length){
 		var index = Math.floor(Math.random() * array.length);
 		var randomSplice = array.splice(index, 1)
		shuffled = shuffled.concat(randomSplice);

	}
 	return array[index];
}



function sortIt(array){
	array = array.concat();
	array.sort();
}

function chunk(array, size){
	size = Math.abs(size) || 2; 
 	array = array.concat();
 	var teams = [];
 	
 	while(array.length){
	var team = [];
	for(var i = 0; i <size && array.length; i++)
	team.push(array.pop());
	teams.push(team);
	}
 	return teams; 
}

console.log("a:", a);
sortIt(a);
console.log("sorted", a);
console.log(chunk(shuffle(a)));

//syntax: arr.splice(index, number of items to remove[, item(s) to insert])

