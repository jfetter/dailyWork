var every = function(arr, cb) {
  var i = 0;
  while (i < arr.length) {
    // console.log(arr[i]);
    // console.log(cb(arr[i]));
    // if a single element returns a false result return false: 
    if (!cb(arr[i])){return false; }
    i++;
  }
  return true; 
};
console.log(
  every([1,2,3], function(e) { return e < 4 })
); // should be true
console.log(
  !every([1,2,5,3], function(e) { return e < 4 })
); // should be false
console.log(
  !every([1,2,5,3], function(e) { return e % 2 === 0 })
); // should be false
console.log(
  every([1,2,5,3], function(e) { return (e*2) % 2 === 0 })
); // should be true


var some = function(arr, cb) {
  var i = 0;
  while (i < arr.length) {
    // console.log(arr[i]);
    // console.log(cb(arr[i]));
    // if a single element returns a false result return false: 
    if (cb(arr[i])){return true; }
    i++;
  }
  return false; 
};
console.log(
  some([1,2,3], function(e) { return e < 4 })
); // should be true
console.log(
  some([1,2,5,3], function(e) { return e < 4 })
); // should be false
console.log(
  some([1,2,5,3], function(e) { return e % 2 === 0 })
); // should be false
console.log(
  some([1,2,5,3], function(e) { return (e*2) % 2 === 0 })
); // should be true

// var e = arr.pop();
// while(e){
// 	if (cb(e)){return true}
// 		e = arr.pop();
// }
