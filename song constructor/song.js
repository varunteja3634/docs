function song(title, artist, duration){
    Media.call(this, title, duration);
    this.artist = artist;
}

song.prototype = Object.create(Media.prototype);

song.prototype.toHTML = function(){
   var htmlString = '<li ';
    if(this.isPlaying){
        htmlString += 'class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration">';
    htmlString += this.duration;
    htmlString += '<span></li>';
    return htmlString;
};
