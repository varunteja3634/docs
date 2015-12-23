function doFirst(){
	pic = document.getElementById('pic1');
	pic.addEventListener("dragstart", startDrag , false);
	left = document.getElementById('left');
	left.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	left.addEventListener("dragover", function(e){e.preventDefault();} , false);
	left.addEventListener("drop", dropped , false);
}

function startDrag(e){
	var code = '<img src="http://lorempixel.com/100/100/abstract/" />';
	e.dataTransfer.setData('hello', code);
}

function dropped(e) {
	e.preventDefault();
	left.innerHTML = e.dataTransfer.getData('hello');
}

window.addEventListener("load", doFirst , false);