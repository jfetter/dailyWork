var thingsToLearn =["React", "Angular", "Node", 
										"Mongo", "Ionic", "Firebase", 
										"Ruby", "JQuery", "Express", "JavaScript",
										"ES6","Bootstrap", "Ajax", "JSON", "APIs",
										"SQL"]
var randomThings = randomize();

randomThings.forEach(function(item, index, all){
	//do something with the element
// var parentDiv; 
var div = document.createElement("div");
div.textContent = item; 
div.setAttribute("class", "box");
// parentDiv.appendChild(div);

document.body.appendChild(div);
});

function randomize(){
 	var randomThings = thingsToLearn.sort(function(a, b){
 	return Math.floor(Math.random() * (a - b + 1)) + b;
	});
	return randomThings; 
}

