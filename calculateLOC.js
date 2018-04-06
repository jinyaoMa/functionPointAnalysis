function setLanguageSelector(parentNode, fpNode) {
	var formCalculateLOC = document.createElement("form");
	formCalculateLOC.style.maxWidth = "500px";
	formCalculateLOC.style.lineHeight = "2em";
	var fieldset = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.innerHTML = "Calculate how many lines of code your project has.";
	var labelSelect = document.createElement("label");
	labelSelect.innerHTML = "Select a language: ";
	labelSelect.for = Math.random();
	var selectLanguage = document.createElement("select");
	selectLanguage.id = labelSelect.for;
	for (var i = 0; i < language_prod_group_9.length; i++) {
		var optionLanguage = document.createElement("option");
		optionLanguage.innerHTML = language_prod_group_9[i][0];
		optionLanguage.value = language_prod_group_9[i][3];
		selectLanguage.appendChild(optionLanguage);
	}
	var labelResult = document.createElement("label");
	labelResult.innerHTML = "Result: ";
	var result = document.createElement("input");
	result.disabled = "true";
	result.size = "10";
	result.style.fontWeight = "bold";
	result.style.fontSize = "14pt";
	result.style.fontFamily = "Arial";
	result.style.borderStyle = "inset";
	var btnCalculate = document.createElement("input");
	btnCalculate.id = Math.random();
	btnCalculate.type = "button";
	btnCalculate.value = "Calculate";
	
	fieldset.appendChild(legend);
	fieldset.appendChild(labelSelect);
	fieldset.appendChild(selectLanguage);
	fieldset.innerHTML += " ";
	fieldset.appendChild(btnCalculate);
	fieldset.innerHTML += "<br>";
	fieldset.appendChild(labelResult);
	fieldset.appendChild(result);
	formCalculateLOC.appendChild(fieldset);
	parentNode.appendChild(formCalculateLOC);

	document.getElementById(btnCalculate.id).onclick = function(event){
		var fpValue = fpNode.value.split(" FP")[0];
		var languageValue = document.getElementById(selectLanguage.id).value;
		if (!isNaN(fpValue) && fpValue.trim() != "") {
			result.value = (parseInt(fpValue) * parseInt(languageValue)) + " LOC";
		}
		event.preventDefault();
	};
}