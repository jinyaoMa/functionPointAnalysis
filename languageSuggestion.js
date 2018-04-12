function setLanguageSuggestion(parentNode, language, time_id, selectedMode) {
	var formLanguageSuggestion = document.createElement("form");
	formLanguageSuggestion.style.maxWidth = "500px";
	formLanguageSuggestion.style.lineHeight = "2em";
	var fieldset = document.createElement("fieldset");
	var legend = document.createElement("legend");
	legend.innerHTML = "Language Suggested";
	var labelSelect = document.createElement("label");
	labelSelect.innerHTML = "Select a language: ";
	labelSelect.for = Math.random();
	var selectLanguage = document.createElement("select");
	selectLanguage.id = labelSelect.for;
	var labelResult = document.createElement("label");
	labelResult.innerHTML = "Old Time: ";
	var result = document.createElement("input");
	result.id = Math.random();
	result.disabled = "true";
	result.size = "10";
	result.style.fontWeight = "bold";
	result.style.fontSize = "14pt";
	result.style.fontFamily = "Arial";
	result.style.borderStyle = "inset";
	var labelResult1 = document.createElement("label");
	labelResult1.innerHTML = "New Time: ";
	var result1 = document.createElement("input");
	result1.disabled = "true";
	result1.size = "10";
	result1.style.fontWeight = "bold";
	result1.style.fontSize = "14pt";
	result1.style.fontFamily = "Arial";
	result1.style.borderStyle = "inset";
	var btnGetSuggestedLanguages = document.createElement("input");
	btnGetSuggestedLanguages.id = Math.random();
	btnGetSuggestedLanguages.type = "button";
	btnGetSuggestedLanguages.value = "Generate";
	
	fieldset.appendChild(legend);
	fieldset.appendChild(labelSelect);
	fieldset.appendChild(selectLanguage);
	fieldset.innerHTML += " ";
	fieldset.appendChild(btnGetSuggestedLanguages);
	fieldset.innerHTML += "<br>";
	fieldset.appendChild(labelResult);
	fieldset.appendChild(result);
	fieldset.innerHTML += "<br>";
	fieldset.appendChild(labelResult1);
	fieldset.appendChild(result1);
	formLanguageSuggestion.appendChild(fieldset);
	parentNode.appendChild(formLanguageSuggestion);

	document.getElementById(btnGetSuggestedLanguages.id).onclick = function(){
		document.getElementById(selectLanguage.id).innerHTML = "";
		var time = document.getElementById(time_id).value.split(" Months")[0];
		var level;
		if (!isNaN(time) && time.trim() != "") {
			for (var i = 0; i < language_prod_group_9.length; i++) {
				if (language_prod_group_9[i][0] == language.item(language.selectedIndex).innerHTML) {
					level = Number(language_prod_group_9[i][1]);
					break;
				}
			}
			for (var i = 0; i < language_prod_group_9.length; i++) {
				if (language_prod_group_9[i][1] > level) {
					// New time = Old time * old level / new level
						var optionLanguage = document.createElement("option");
						optionLanguage.innerHTML = language_prod_group_9[i][0];
						optionLanguage.value = time * level / Number(language_prod_group_9[i][1]);
						document.getElementById(selectLanguage.id).appendChild(optionLanguage);
				}
			}
			if (document.getElementById(result.id).value != document.getElementById(time_id).value) {
				document.getElementById(result.id).value = document.getElementById(time_id).value;
			}
		} else {
			alert("Effort and Time required.");
		}
	};
	
	document.getElementById(selectLanguage.id).onchange = function (){
		result1.value = roundOff(document.getElementById(selectLanguage.id).value, 2) + " Months";
	};
}