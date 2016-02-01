var html = '';
var red;
var green;
var blue;
var rgbColor;

function color(){
    return Math.floor(Math.random() * 256 );
}

for (var i = 0; i < 100; i += 1) {
  red = color();
  green = color();
  blue = color();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);