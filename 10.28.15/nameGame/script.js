document.getElementById('addButton').addEventListener('click', addStudent);

var students = [];

//reuse this function for pairing and teaming
function moveArrayToDOM(array, id){
	if (id !== "groups"){
document.getElementById(id).innerHTML = "";
 }
var containerDiv =[];
return array.forEach(function(item, index, all){
var li = document.createElement("li");
var textItem = document.createTextNode(item);
li.appendChild(textItem);
document.getElementById(id).appendChild(li);
});
}


var studentNameInput = document.getElementById('studentName');
studentNameInput.addEventListener('keypress', enterPressed)

studentNameInput.focus();

function enterPressed() {
 if (event.charCode === 13) {
    addStudent();
 }
}

function addStudent() {
 var inputStr = studentNameInput.value;
 if (inputStr) {
 
   var names = inputStr.trim().split(',');
   names = names.map(function(name){
       return name.trim();
   }).filter(function(name){
       return name !== "";
   });
   students = students.concat(names);
 studentNameInput.value = '';
 studentNameInput.focus();

 moveArrayToDOM(students, "namesUL");

 }
}
function assignStudents(number) {
	var student = randomizeStudents();
	var luckyStudent = student[number].split();
	return luckyStudent;
}

document.getElementById('randomPerson').addEventListener('click', selectOne);
function selectOne(){
	moveArrayToDOM(assignStudents(1), "oneRandomer")
}

document.getElementById('triggerRandomizer').addEventListener('click', randomizeStudents);

function randomizeStudents(){
	var randomStudents = students.sort(function(a,b){
		return 0.5 - Math.random();
});
	students = randomStudents;
	moveArrayToDOM(randomStudents, "namesUL");
	return randomStudents;
};

document.getElementById('makeTeam').addEventListener('click', pairUp);
var teamSize = document.getElementById('teamSize');
studentNameInput.addEventListener('keypress', enterPressed);


// var studentArray = document.getElementById('namesUL').textContent;

 function pairUp(){
	console.log("students array for pairUp" + students);
	var size = teamSize.value;
	console.log("size " + size);
	var length = students.length; 
	console.log("length" + length + "students" + students)
	 var tempArray = [];
	 var runTimes = Math.ceil(students.length/size);
   if (size > 0){
   	console.log("in if")
 		for (var i = 0; i < runTimes ; i++){ 
 			     	tempArray = [];
 				console.log("run loop this many times" + runTimes);
 		    tempArray.push("team" + (i + 1));
 		    var x = students.length -1
 		    var y = students.length - size; 
 			  for (x; x >= y && x >= 0; x --){
 			  	tempArray.push(students[x]);
 				  students.pop();
 				  console.log("remaining pool of students" +students)
 			  	}		
 			  	moveArrayToDOM(tempArray, "groups");
 		}
 	}
 	// return group; 
};


