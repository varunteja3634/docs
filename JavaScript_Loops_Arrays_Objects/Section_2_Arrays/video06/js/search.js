var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true){
    var ask = prompt("please type something to see if the product is in stock.type list to see all items in stock.type quit to exit!!");
    ask = ask.toLowerCase();
    
    if(ask === "quit"){
        break;
    }else if(ask === "list"){
        print(inStock.join(", "));
    }else{
        if(inStock.indexOf(ask) > -1 ){
            print("<p>we have " + ask + " in our list.</p>");
        }else{
            print("<p>sorry we dont have " + ask + " in our products</p>");
        }
    }
}

print(inStock.sort());