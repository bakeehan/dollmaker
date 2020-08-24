// number of items
var allPieces = [["body",1], ["ears",4], ["eyebrows",9], ["eyes",13], ["face",1], ["mouth",10]];

// DOM and basics
var container = document.getElementById("dollContainer");
var tabsBox = document.getElementById("tabbedButtons");
var piecesBox = document.getElementById("piecesButtons");
var imgSrcHTML = ["<img src=images/'",".png'>"];

function putImage(type,x) {
	var div = "doll" + type.charAt(0).toUpperCase() + type.slice(1)
	div = document.getElementById(div);
	div.innerHTML = "<img src='images/" + type + "/" + x + ".png'>";
}

function shuffle(count) {
	return Math.floor(Math.random() * Math.floor(count));
}

function createButton(type, name, number) {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = name;
	if (type) {
		var x = number + 1;
		btn.innerHTML += " " + x;
		piecesBox.appendChild(btn);
		btn.addEventListener("click", function() {
			putImage(name, number);
		}, false);
	} else {
		tabsBox.appendChild(btn);
		btn.addEventListener("click", function() {
			changeMenu(name);
		}, false);
	}
}

function changeMenu(name) {
	piecesBox.innerHTML = "";
	var many = 0;
	for (var i = allPieces.length - 1; i >= 0; i--) {
		if (allPieces[i][0] === name) {
			many = allPieces[i][1];
		}
	}
	for (var i = 0; i <= many - 1; i++) {
		createButton(true, name, i);
	}
}

document.body.onload = function() {
	for (var i = allPieces.length - 1; i >= 0; i--) {
		putImage(allPieces[i][0],shuffle(allPieces[i][1]));
		createButton(false, allPieces[i][0], 0);
	}
}

















