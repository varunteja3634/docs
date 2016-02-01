function submit_answers()
{
var total = 5;
var score = 0;
	
	var q1= document.forms['quiz_form']['q1'].value;
	var q2= document.forms['quiz_form']['q2'].value;
	var q3= document.forms['quiz_form']['q3'].value;
	var q4= document.forms['quiz_form']['q4'].value;
	var q5= document.forms['quiz_form']['q5'].value;

	//validation
	for(i=1; i<=total; i++){
		if(eval('q'+i) == null || eval('q'+i) == ""){
			alert("you missed question "+i+"!");
		
		return false
		}
	}
	//check answers
	var answers = ["c","d","d","a","a"];
	
	for(i=1; i<= total; i++){
		if(eval('q'+i) == answers[i-1]){
			score++;
		}
	}
	
	var results = document.getElementById('results');
	results.innerHTML ="<h3>you scored <span>"+score+"</span> out of <span>"+total+"</span></h3>";
	alert("you scored "+score+" out of "+total);
	return false;
}