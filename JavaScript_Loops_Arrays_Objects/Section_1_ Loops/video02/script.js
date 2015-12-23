function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var i = 0;

while(i < 100000000){
    document.write(randomNumber(10000000) + " ");
    i++;
}

