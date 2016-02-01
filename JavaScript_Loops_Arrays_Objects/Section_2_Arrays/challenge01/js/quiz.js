var quiz = [
  ['who sang I Did It My Way?','Frank sinatra'],
  ['who sang Respect?','Aretha Franklin'],
  ['who sang Imagine?','John lennon'],
  ['who sang Born to Run?','Bruce springsteen'],
  ['who sang Louie Louie?','The kingsmen'],
  ['who sang Maybellene?','check burry']
];

var score = 0;
var wrong = [];

function print(message) {
  document.write(message);
}


for(var i = 0; i < quiz.length; i++){
    var correct = quiz[i][0];
    var question = prompt(quiz[i][0]);
   
    if(question.toLowerCase() === quiz[i][1].toLowerCase()){
       score++; 
    }else{
        wrong.push(correct);
    }
  
}


    print("<p> you got " + score + " questions correct! thanks for playing.</p>");

    var Questions = "the questions you got wrong are:<br>";
    
    print(Questions)

        for(var i = 0; i < wrong.length; i++){

                print("<p>" + wrong[i] + "</p>" );
        }




