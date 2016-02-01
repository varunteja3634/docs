function makeCanvas(){
	var getcanvas1 = document.getElementById('canvas1');
	canvas1 = getcanvas1.getContext('2d');
	 
	canvas1.font = '50px Arial';
	canvas1.fillStyle = 'deepSkyBlue';
	canvas1.strokeStyle = 'black';
	
	canvas1.strokeText('I love html5',45,150);
	canvas1.fillText('I love html5',45,150);
	
	//canvas 2
	var getcanvas2 = document.getElementById('canvas2');
	canvas2 = getcanvas2.getContext('2d');
	
	canvas2.fillStyle = 'red';
	canvas2.strokeStyle = 'black';
	
	canvas2.lineWidth = 10;
	
	//rect1
	canvas2.fillRect(45,5,135,135);
	canvas2.strokeRect(45,5,135,135);
	
	canvas2.fillStyle = 'grey';
	
	//rect2
	canvas2.fillRect(200,0,135,135);
	//rect3
	canvas2.fillRect(45,150,135,135);
	
	canvas2.fillStyle = 'red';
	canvas2.strokeStyle = 'black';
	
	//rect4
	canvas2.fillRect(200,150,135,135);// same 200 because it has to start from same rect 2
	canvas2.strokeRect(200,150,135,135);
	
	/////canvas 3///// 
	var getcanvas3 = document.getElementById('canvas3');
	canvas3 = getcanvas3.getContext('2d');
	
	canvas3.strokeStyle = 'grey';
	canvas3.fillStyle = 'red';
	canvas3.lineWidth = 5; 
	
	canvas3.beginPath();
	canvas3.moveTo(100,100);
	canvas3.lineTo(150,200);
	canvas3.lineTo(200,200);
	canvas3.lineTo(200,290);
	canvas3.lineTo(290,290);
	canvas3.lineTo(290,100);
	canvas3.lineTo(100,100);
	canvas3.stroke();
	canvas3.fill();
	
	//circles in canvas 4
	var getcanvas4 = document.getElementById('canvas4');
	canvas4 = getcanvas4.getContext('2d');
	
	//circle 1
	canvas4.fillStyle = 'blue';
	
	canvas4.beginPath();
	canvas4.arc(200,30,25,0, Math.PI * 2);
	canvas4.fill();
	canvas4.closePath();
	
	//circle 2
	canvas4.fillStyle = 'red';
	
	canvas4.beginPath();
	canvas4.arc(200,100,45,0, Math.PI * 2);
	canvas4.fill();
	canvas4.closePath();
	
	//circle 3
	canvas4.fillStyle = 'black';
	
	canvas4.beginPath();
	canvas4.arc(200,220,75,0, Math.PI * 2);
	canvas4.fill();
	canvas4.closePath();
	
	//canvas5
	var getcanvas5 = document.getElementById('canvas5');
		canvas5 = getcanvas5.getContext('2d');
		
		var xpos = 0;
		var ypos = 0;
	setInterval(animate,30);
	
	function animate(){
		xpos += 1;
		ypos += 1;
		
		canvas5.fillStyle = 'black';
		
		canvas5.fillRect(0,0,getcanvas5.width,getcanvas5.height);
		
		canvas5.fillStyle = 'blue';
	
		canvas5.beginPath();
		canvas5.arc(200,ypos,40,0, Math.PI * 2);
		canvas5.fill();
		canvas5.closePath();
		
		canvas5.fillStyle = 'red';
	
		canvas5.beginPath();
		canvas5.arc(xpos,100,70,0, Math.PI * 2);
		canvas5.fill();
		canvas5.closePath();
		
		canvas5.fillStyle = 'green';
	
		canvas5.beginPath();
		canvas5.arc(xpos,ypos,75,0, Math.PI * 2);
		canvas5.fill();
		canvas5.closePath();
	}
}