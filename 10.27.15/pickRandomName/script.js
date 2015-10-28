var thingsToLearn =["React", "Angular", "Node", 
										"Mongo", "Ionic", "Firebase", 
										"Ruby", "JQuery", "Express", "JavaScript",
										"ES6","Bootstrap", "Ajax", "JSON", "APIs",
										"SQL"]

										 var makeBoxes =function(array){
										 	// for (var i =0; i < array.length; i++ ){
										 		var elem = document.createElement("div");
										 		var text = document.createTextNode(array[i]);
										 		var clas = document.getElementByTagName("div").class("box");
										 		elem.appendChild(text);
										 		// elem.appendChild(clas);
										 		elem.addClass("box");
										 		document.body.appendChild(elem);

										 	}
										 	

										 // }
										 // makeBoxes(thingsToLearn);

										// "<div class="box">" + array[i] + "</div>")

thingsToLearn.forEach(function(item, index, all){
	//do something with the element
document.write("<div class='box'>" + item + "</div>");

});

thingsToLearn.forEach(function(item, index, all){
	//do something with the element
// var parentDiv; 
var div = document.createElement("div");
div.textContent = item; 
div.setAttribute("class", "box");
// parentDiv.appendChild(div);

document.body.appendChild(div);
});

