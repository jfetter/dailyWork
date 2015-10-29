document.getElementById('addButton').addEventListener('click', addStudent);


var students = [];
var randomizedStudents = [];

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

document.getElementById('triggerRandomizer').addEventListener('click', randomizeStudents);
function randomizeStudents(){
	var randomStudents = students.sort(function(a,b){
		return 0.5 - Math.random();
});
	console.log(students);
	moveArrayToDOM(randomStudents);
    

};


