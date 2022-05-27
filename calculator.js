//add event listener for the buttons and display the typed one 
//by the user on the calculator display

var numbers = document.querySelectorAll('.number');
var visor = document.querySelector('.visor')
var visorText ="";

//first listens to clicks
numbers.forEach((number) => {

    number.addEventListener('click', () => {
        // gets the text
        var text = number.innerHTML.replace(/(?:\r\n|\n|\r|\t)/g,"").trim();
        visorText+=text;
        visor.textContent = visorText;
    });

});

