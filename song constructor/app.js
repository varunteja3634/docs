var Playlist = new Playlist();

var hereComesTheSun = new song('here comes the sun', 'the beatles', '2:54');
var walkingTheSunshine = new song('walking on sunshine', 'katrina and the waves', '3:43');

var manOfSteel = new Movie('movie of steel', 2013, "2:23:00");

Playlist.add(hereComesTheSun);
Playlist.add(walkingTheSunshine);
Playlist.add(manOfSteel);

var playlistElement = document.getElementById('playlist');

Playlist.renderInElement(playlistElement);

var playbutton = document.getElementById('play');

playbutton.onclick = function(){
    Playlist.play();
    Playlist.renderInElement(playlistElement);
}

var nextbutton = document.getElementById('next');

nextbutton.onclick = function(){
    Playlist.next();
    Playlist.renderInElement(playlistElement);
}

var stopbutton = document.getElementById('stop');

stopbutton.onclick = function(){
    Playlist.stop();
    Playlist.renderInElement(playlistElement);
}
