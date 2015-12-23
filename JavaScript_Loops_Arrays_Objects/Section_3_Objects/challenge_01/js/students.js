var students = [
    {
        name: "secil inam",
        track: "front-end web development",
        achievements: 8,
        points: 501
    },
    
    {
        name: "Aaron Endsley",
        track: ["front-end web development","web design","full-stack javascript"],
        achievements: 7,
        points: 2001  
    },
    
    {
        name: "Jonathan Grieve",
        track: ["front-end web development","web design","back-end web development"],
        achievements: 324,
        points: 27061  
    },
    
    {
        name: "Ary de Oliveira",
        track: ["front-end web development","web design","back-end web development"],
        achievements: 124,
        points: 9410  
    },
    
    {
        name: "Rifqi Fahmi",
        track: ["front-end web development","web design","back-end web development","android","digital literacy"],
        achievements: 50,
        points: 4197  
    }
];
 
var msg = '<div id="home"><ol>';

var searching = true;

while(searching){
    var search = prompt("search for a student  name, type quit to exit.");
    
    
    if(search === null || search.toLowerCase() === "quit"){
        break;
    }else{
        
        for(var i = 0; i < students.length; i++){
            
            if(students[i].name === search){
                
                for(var key in students[i]){
                        msg += '<li>' + key + ': ' + students[i][key] + '</li>';
                }
                searching = false;
                 break;  
            }
        }
    }

}



msg += '</ol></div>';

document.write(msg);