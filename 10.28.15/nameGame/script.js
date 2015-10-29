document.getElementById('addButton').addEventListener('click', addStudent);

var students = [];

//reuse this function for pairing and teaming
function moveArrayToDOM(array, id){
document.getElementById(id).innerHTML = "";
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
	console.log(students);
	//moveArrayToDOM(randomStudents, "randomizedNames");
	return randomStudents;
};

document.getElementById('makeTeam').addEventListener('click', pairUp);
var teamSize = document.getElementById('teamSize');
studentNameInput.addEventListener('keypress', enterPressed);

function pairUp(){
	var size = teamSize.value;
	console.log(size);
	 var tempArray = [];
   var group = [];
   var array = randomizeStudents();
   if (size > 0){
   	tempArray = [];
 	for (var i = size -1; i < array.length; i +=size){ 

 			 for (var x = size; x > 0; x--){
 			 		console.log(array[x]);
 			 		tempArray.push(array[x]);
 			 	}		
 				group.push(tempArray);
 	}
 }
 	 	console.log("group" + group);
 	 	 moveArrayToDOM(pairUp, "groups");
 	return group; 
};

