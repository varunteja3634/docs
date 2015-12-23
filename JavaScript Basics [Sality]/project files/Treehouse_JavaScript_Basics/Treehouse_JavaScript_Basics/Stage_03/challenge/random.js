var input1 = prompt("select the first no.");
var topNumber = parseInt(input1);
var input2 = prompt("select the second no.");
var bottomNumber =  parseInt(input2);
var math = Math.floor(Math.random()*(topNumber - bottomNumber + 1)) + bottomNumber;
document.write(math);