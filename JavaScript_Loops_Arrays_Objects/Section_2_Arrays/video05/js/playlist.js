var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function printArray(array){
    var html = "<ol>";
    
    for(i = 0;i < array.length; i++){
        html += "<li>" + array[i] +"</li>";
    }
    
    html += "</ol>";
    
    print(html);
}

function print(message) {
  document.write(message);
}

function printText(){
    playList.push(text.val);
}

printArray(playList);

