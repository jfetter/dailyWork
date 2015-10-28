function countBy(x,n)
{
	var array = [];
	var x;
	var n;
	var i;  
	for(i =x; array.length < n ; i+= x){
	array.push(i);
	}
		return array; 
}
console.log(countBy(1,4));
console.log(countBy(3,3));
console.log(countBy(5,7));