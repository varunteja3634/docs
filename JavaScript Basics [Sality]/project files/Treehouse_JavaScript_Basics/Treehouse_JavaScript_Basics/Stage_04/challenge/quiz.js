var score = 0;

var question1 = prompt("which programming language has a gem in it's name?");

if(question1.toLowerCase() === 'ruby'){
    score++;
}

var question2 = prompt("which programmming language has a snake in it's name?");

if(question2.toLowerCase() === 'python'){
    score++;
}

var question3 = prompt("which language is used to create the stucture of a page?");

if(question3.toLowerCase() === 'html' || question3.toLowerCase === "hypertextmarkuplanguage"){
    score++;
}

var question4 = prompt("which language is used to add styling to a web page?");

if(question4.toLowerCase() === 'css' || question4.toLowerCase === "cascading style sheets"){
    score++;
}

var question5 = prompt("which programming language is used to add interactivity to a web page?");

if(question5.toLowerCase() === 'javascript'){
    score++;
}


if(score === 5){
    alert("congratulations, your all answers are correct. you earned a gold badge!");
}else if(score < 5 && score > 3){
    alert("congratulations, you earned a silver badge");
}else{
    alert("you need more practice!!");
}

document.write("<p>your score is <strong>"+ score + "</strong></p>");
document.write("<p>answer to the question 1 is ruby</p>");
document.write("<p>answer to the question 2 is python</p>");
document.write("<p>answer to the question 3 is html</p>");
document.write("<p>answer to the question 4 is css</p>");
document.write("<p>answer to the question 5 is javascript</p>");
