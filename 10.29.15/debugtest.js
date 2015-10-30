document.getElementById("myButton")
				.addEventListener("click", buttonClicked);

				console.log("ok")

				var count = 0;

				function buttonClicked(event){
					console.log("count:", ++ count)
					debugger; 
				}