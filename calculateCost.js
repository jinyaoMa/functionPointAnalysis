function setCostCalculator(parentNode, effortNode) {
	var formCalculateCost = document.createElement("form");
	formCalculateCost.style.maxWidth = "550px";
	formCalculateCost.style.lineHeight = "2em";
	var fieldset = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.innerHTML = "Calculate Cost (Budget / Man/Month).";
	var labelBudget = document.createElement("label");
	labelBudget.innerHTML = "Enter your budget: ";
	labelBudget.for = Math.random();
	var enterBudget = document.createElement("input");
	enterBudget.id = labelBudget.for;
	var labelResult = document.createElement("label");
	labelResult.innerHTML = "Cost: ";
	var result = document.createElement("input");
	result.disabled = "true";
	result.size = "20";
	result.style.fontWeight = "bold";
	result.style.fontSize = "14pt";
	result.style.fontFamily = "Arial";
	result.style.borderStyle = "inset";
	var btnCalculate = document.createElement("input");
	btnCalculate.id = Math.random();
	btnCalculate.type = "button";
	btnCalculate.value = "Calculate";
	
	fieldset.appendChild(legend);
	fieldset.appendChild(labelBudget);
	fieldset.appendChild(enterBudget);
	fieldset.innerHTML += " ";
	fieldset.appendChild(btnCalculate);
	fieldset.innerHTML += "<br>";
	fieldset.appendChild(labelResult);
	fieldset.appendChild(result);
	formCalculateCost.appendChild(fieldset);
	parentNode.appendChild(formCalculateCost);

	document.getElementById(btnCalculate.id).onclick = function(event){
		var effort = document.getElementById(effortNode.id).value.split(" Man/Month")[0];
		var budget = document.getElementById(enterBudget.id).value;
		if (!isNaN(effort) && effort.trim() != "") {
			if (budget.trim() != "" && isNaN(budget)) {
				alert("Budget should be decimal.");
				return;
			}
			result.value = roundOff(budget / effort, 2) + " Budget/Man/Month";
		} else {
			alert("Effort required.");
		}
		event.preventDefault();
	};
	
	return result;
}