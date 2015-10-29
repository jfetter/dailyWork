var students = [];

document.getElementById('addButton').addEventListener('click', addStudent);

var studentNameInput = document.getElementById('studentName');
studentNameInput.addEventListener('keypress', keyPressed)

studentNameInput.focus();

function keyPressed(event) {
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

 var containerDiv =[];

students.forEach(function(item, index, all){
var div = document.createElement("div");
var textItem = document.createTextNode(item);
div.appendChild(textItem);
console.log("div =" + div);
document.getElementById("namesDiv").appendChild(div); 

// containerDiv.push(div);
// ("containerDiv =" + containerDiv);
// div.setAttribute("class", "name");
});
 }
}

