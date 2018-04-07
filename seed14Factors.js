function setButtonSeeding14Factors(parentNode, factorsNodes) {
	var panel = document.createElement("div");
	panel.style.position = "fixed";
	panel.style.right = "0";
	panel.style.backgroundColor = "white";
	panel.style.border = "1px solid";
	panel.style.borderRight = "none";
	panel.style.borderRadius = "1em 0 0 1em";
	panel.style.width = "100px";
	panel.style.padding = "0 0 10px 10px";
	var desc = document.createElement("p");
	desc.innerHTML = "Click the button below to seed the 14 technical complexity factors to scale 3, Average."
	var btnSeed = document.createElement("button");
	btnSeed.innerHTML = "SEED";
	
	panel.appendChild(desc);
	panel.appendChild(btnSeed);
	parentNode.appendChild(panel);
	
	panel.style.top = ((screen.availHeight - panel.clientHeight) / 2) + "px";
	
	btnSeed.onclick = function () {
		for (var i in factorsNodes) {
			factorsNodes[i].value = "3";
		}
	};
	
	return panel;
}