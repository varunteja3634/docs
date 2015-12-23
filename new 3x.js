function dofirst() {
	
	barSize = 500;
	video = document.getElementById('video');
	playbutton = document.getElementById('playbutton');
	defaultBar = document.getElementById('defaultBar');
	progressbar = document.getElementById('progressbar');
	
	playbutton.addEventListener('click', PlayOrPause ,false);
	defaultBar.addEventListener('click', ClickedBar ,false);
}

  function PlayOrPause() {
	  
	  if( !video.paused && !video.ended){
		  video.pause();
		  playbutton.innerHTML = 'play';
		  window.clearInterval(updatebar);
	  } else {
		  video.play();
		  playbutton.innerHTML = 'pause';
		  updatebar = setInterval(update,500);
	  }
  }
  
 function update(){
	 if(!video.ended){
		 var size= parseInt(video.currentTime*barSize/video.duration);
		 progressbar.style.width = size +'px';
	 } else {
		 progressbar.style.width ='0px';
		 playbutton.innerHTML = 'play';
		 window.clearInterval(updatebar);
	 }
 }
 
 function ClickedBar(e) {
	 if( !video.paused && !video.ended){
	  var mouseX = e.pageX-defaultBar.offsetLeft;
	  var newtime = mouseX*video.duration/barSize;
	  video.currentTime = newtime;
	  progressbar.style.width = mouseX+'px';
	 }
 }
 
 window.addEventListener('load',dofirst,false);