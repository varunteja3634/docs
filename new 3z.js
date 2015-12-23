function doFirst() {
	var button = document.getElementById("button");
	button.addEventListener("click", saveStuff , false);
}

function saveStuff(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	display();
	document.getElementById('one').value = "";
	document.getElementById('two').value = "";
}

function display() {
	var rightBox = document.getElementById("rightbox");
	rightBox.innerHTML = "";
	
	for(var i=0;i<sessionStorage.length;i++){
		var x = sessionStorage.key(i);
		var y = sessionStorage.getItem(x);
		rightBox.innerHTML += x+" - "+y+"<br />";	
	
	}
}

window.addEventListener("load", doFirst , false);