function (text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer === choice;
}

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer){
    if(this.currentGetCurrentQuestion().isCorrectAnswer(answers)){
        this.score++;
    }
    this.currentQuestionIndex++;
}

Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.hasEnded = function(){
    return this.currentQuestionIndex >= this.questions.length;
}


var question = [
    new question('is 1=1?',['1','2'],'1');
    new question('is 2=2?',['1','2'],'2');
];

var quiz = new Quiz(question);

QuizUI.displayNext();