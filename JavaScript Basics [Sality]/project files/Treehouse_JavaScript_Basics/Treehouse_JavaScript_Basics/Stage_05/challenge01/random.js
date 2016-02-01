function numberGenerator(upper,lower){
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}

document.write(numberGenerator(2,10));