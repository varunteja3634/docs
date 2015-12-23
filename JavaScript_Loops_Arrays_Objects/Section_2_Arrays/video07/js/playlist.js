var playList = [
  ['I Did It My Way','Frank sinatra'],
  ['Respect','Aretha Franklin'],
  ['Imagine','John lennon'],
  ['Born to Run','Bruce springsteen'],
  ['Louie Louie','The kingsmen'],
  ['Maybellene','check burry']
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i][0] + " by " + list[i][1] +'</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);





















