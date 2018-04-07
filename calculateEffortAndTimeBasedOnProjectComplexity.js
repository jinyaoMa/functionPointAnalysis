function setEffortAndTimeCalculatorBasedOnProjectComplexity(parentNode, locNode) {
	var modesOfProjects = {
		'Organic - Less Complex and Flexible Process Project' : [3.2, 1, 1.05, 2.5, 0.38],
		'Semidetached - Average Project' : [3.0, 1, 1.12, 2.5, 0.35],
		'Embedded - Complex and Real-time Defense Project' : [2.8, 1, 1.2, 2.5, 0.32]
	};
	var formCalculateEffortAndTIme = document.createElement("form");
	formCalculateEffortAndTIme.style.maxWidth = "550px";
	formCalculateEffortAndTIme.style.lineHeight = "2em";
	var fieldset = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.innerHTML = "Calculate Effort and Time.";
	var labelSelect = document.createElement("label");
	labelSelect.innerHTML = "Select a mode of your project: ";
	labelSelect.for = Math.random();
	var selectMode = document.createElement("select");
	selectMode.id = labelSelect.for;
	for (var mode in modesOfProjects) {
		var optionMode = document.createElement("option");
		optionMode.innerHTML = mode;
		optionMode.value = mode;
		selectMode.appendChild(optionMode);
	}
	var labelEffortResult = document.createElement("label");
	labelEffortResult.innerHTML = "Effort: ";
	var effortResult = document.createElement("input"); // Effort
	effortResult.id = Math.random();
	effortResult.disabled = "true";
	effortResult.size = "20";
	effortResult.style.fontWeight = "bold";
	effortResult.style.fontSize = "14pt";
	effortResult.style.fontFamily = "Arial";
	effortResult.style.borderStyle = "inset";
	var labelTimeResult = document.createElement("label");
	labelTimeResult.innerHTML = "Time: ";
	var timeResult = document.createElement("input"); // Time
	timeResult.id = Math.random();
	timeResult.disabled = "true";
	timeResult.size = "20";
	timeResult.style.fontWeight = "bold";
	timeResult.style.fontSize = "14pt";
	timeResult.style.fontFamily = "Arial";
	timeResult.style.borderStyle = "inset";
	var btnCalculate = document.createElement("input");
	btnCalculate.id = Math.random();
	btnCalculate.type = "button";
	btnCalculate.value = "Calculate";
	
	fieldset.appendChild(legend);
	fieldset.appendChild(labelSelect);
	fieldset.appendChild(selectMode);
	fieldset.innerHTML += " ";
	fieldset.appendChild(btnCalculate);
	fieldset.innerHTML += "<br>";
	fieldset.appendChild(labelEffortResult);
	fieldset.appendChild(effortResult);
	fieldset.innerHTML += "<br>";
	fieldset.appendChild(labelTimeResult);
	fieldset.appendChild(timeResult);
	formCalculateEffortAndTIme.appendChild(fieldset);
	parentNode.appendChild(formCalculateEffortAndTIme);

	document.getElementById(btnCalculate.id).onclick = function(event){
		var loc = locNode.value.split(" LOC")[0];
		var modeFacters = modesOfProjects[document.getElementById(selectMode.id).value];
		if (!isNaN(loc) && loc.trim() != "") {
			var A = modeFacters[0];
			var B = modeFacters[1];
			var C = modeFacters[2];
			var D = modeFacters[3];
			var E = modeFacters[4];
			// Effort = A * B * (size ^ C)
			var effort = A * B * Math.pow(Number(loc)/1000,1.05);
			document.getElementById(effortResult.id).value = roundOff(effort, 2) + " Man/Month";
			// Time = D * (Effort ^ E)
			document.getElementById(timeResult.id).value = roundOff(D * Math.pow(effort, E), 2) + " Months";
		} else {
			alert("LOC required.")
		}
		event.preventDefault();
	};
	
	return {
		'effort': effortResult, 
		'time': timeResult
	};
}