$(document).ready(function(){
	var speed = 500;
	var autoswitch = true;
	var fadeSpeed = 4000;
	
	//add class active
	$('.slide').first().addClass('active');
	
	//hide orther divs
	$('.slide').hide();
	
	//show active slide
	$('.active').show();
	
	$('#next').on('click',goNext);
	
	$('#prev').on('click',goPrev);

	if(autoswitch == true){
		setInterval(goNext,fadeSpeed);
	}
	
	 function goNext(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		}else{
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	 function goPrev(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		}else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
