var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

do{
   guess = prompt("i'm thinking of a no. between 1 to 10.what is it?");
    guessCount++;
    
    if(parseInt(guess) === randomNumber){
        var correctGuess = true;
    }
    
}while( !correctGuess );


document.write("<p>you guessed it correct.the no. was <strong>" + randomNumber +"</strong> it took <strong>" + guessCount + "</strong> times to guess it.")