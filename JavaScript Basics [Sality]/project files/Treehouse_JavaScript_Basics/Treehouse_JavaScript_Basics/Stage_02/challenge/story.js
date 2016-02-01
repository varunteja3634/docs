var question = confirm("are you ready to hear a story?");

if(question == true) {
    var noun = prompt("type your name");
    var gender = prompt("are you a he or she?");
    var hisOrHer = prompt("are you a his or her?");
    var himOrHer = prompt("are you a him or her?"); 
    var story = "When I called ";
    story += noun + ", " + hisOrHer + "  phone was engaged. When I met ";
    story += himOrHer + ", " + gender + " was engaged.";
    document.write(story);

} else {
	alert("sad to hear that. :(");
}