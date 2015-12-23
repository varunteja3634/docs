var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var msg = "<p>hi, my name is " + person.name +"</p>";
    msg += "<p>I live in " + person.country + "</p>";
    
    person.name = "anonmyous";

    msg += "<p>but i wish my name was " + person.name +"</p>";
    
    person.age++;
    
    msg += "<p>next year, iam going to be " + person.age + "</p>";
    
    msg += "<p>i have " + person.skills.length + " skills</p>"
    
    msg += "<p> my skills are " + person.skills.join(", ") + "</p>";
print(msg);