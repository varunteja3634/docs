function Question() {
    this.question = [];
}

function Options(options) {
    this.option1 = [];
    this.option2 = [];
}

//pushfunction
function Push() {
}

Push.prototype.pushIt = function (array, text){
    return array.push(text);
};

Push.prototype = Object.create(Question.prototype);
Push.prototype = Object.create(Options.prototype);

//add function 
function Add(){
}

Add.prototype.add = function(array, node, i){
    var Node = document.getElementById(node);
    Node.innerHTML = array[i];
    return Node.innerHTML;
}

Add.prototype = Object.create(Question.prototype);
Add.prototype = Object.create(Options.prototype);


/* create an empty string array and also a method in which you can set answers and name it setAnswers.
then push the answers to an array type property called guess.
then iterate the each item in the array called guess and see if it matches with the answers array the increment the score.
create a q&a array of all addQuestion and addOptions methods and 
then onclick of the user button 
    1.change the value of methods addQuestion and addOptions to new questions and answers
    2.then use call setAnswers method to push the buttons value to guess array
    3.iterate over q&a array and call it's value when button is clicked
*/

function setScore() {
    this.guess = [];
    this.Answers = [1,2,3];
    this.score = 0;
}

setScore.prototype.setAnswers = function(num){
    this.guess.push(num);
}



setScore.prototype.show = function(){
    var body = document.getElementsByTagName('body');
    var showScore = body.innerHTML = '<h1>your score is ' + this.score + '</h1>';
};

/*ui stuff */
var button1 = document.getElementById('guess0');
var button2 = document.getElementById('guess1');
var question = document.getElementById('question');
var counter = 0;

var question1 = new Question();
question1.pushIt(this.question, "is 1 = 1 ?");
question1.add(this.question, 'question', counter);


button1.onclick = function(){
    counter++;
    var score = new setScore;
    score.setAnswers(button1.value);
}

button2.onclick = function(){
    var score = new setScore;
    score.setAnswers(button2.value);
}