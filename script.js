const inputElement = document.getElementById("answer");

let num1, num2, operator, correctAnswer;
let score = 0;


const operators = ["+", "-", "*"];

function checkAnswer() {
    if (inputElement !== null) { 
        const currentStatus = inputElement.value;
        console.log(currentStatus); 

        if (currentStatus === 2) {
        console.log("Correct");
        }
    }
}
