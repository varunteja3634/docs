function Dice( sides ) {    
    this.sides = sides;
}

 Dice.prototype.roll = function(){
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber; 
}

var dice = new Dice(6);
var dice10 = new Dice(10);

function printNumber(number){
    var placeholder = document.getElementById("body");
    placeholder.innerHTML = '<p>' + number + '</p>';
}

var button = document.getElementById("button");

button.onclick = function(){
    var print = dice.roll();
    printNumber(print);
};

/* 
var calculator = {
     sum: 0,
     add: function(value){
         this.sum += value;
     },
     clear: function(){
         this.sum = 0;
     },
     equals: function(){
         return this.sum
     }
 }
 */