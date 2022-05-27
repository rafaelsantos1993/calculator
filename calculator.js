//add event listener for the buttons and display the typed one 
//by the user on the calculator display

var numbers = document.querySelectorAll('.number');
var operators = document.querySelectorAll('.operator');
var visor = document.querySelector('.visor')
var visorText ="";

function getTextFromClass(cls){
    return cls.innerHTML.replace(/(?:\r\n|\n|\r|\t)/g,"").trim();
}

// do the math after equals is pressed 
function doMath(){
    if(visorText.length ==='0'){
        visor.textContent= 'ERR'
    }
    else {
        //operatios
    }
}

//listens to clicks
numbers.forEach((number) => {

    number.addEventListener('click', () => {
        // gets the text
        visorText+=getTextFromClass(number);
        visor.textContent = visorText;
        });
});
//listens to operators
operators.forEach((operator) => {

    operator.addEventListener('click', () => {
        // gets the text
        visorText+=getTextFromClass(operator);
        visor.textContent = visorText;
        });
});
//listens to keybord
document.addEventListener('keydown', event => {
    var keyName = event.key;
    var calculatorKeys =[];

    //gets numbers on the keys
    numbers.forEach(number => {
        calculatorKeys = calculatorKeys.concat(getTextFromClass(number));
    });

    //gets operators on the keys
    operators.forEach(operator => {
        calculatorKeys = calculatorKeys.concat(getTextFromClass(operator));
    });

    if(calculatorKeys.find(e => e == keyName)){
        visor.textContent+=keyName;
    }

    if (keyName == 'Enter'){
        //do the math
        doMath();
    }
    
});
//listens to equals and do the math 
var equals = document.querySelector('.equals');
equals.addEventListener('click', doMath); 

//change keybord bord's style when the key is pressed. 


