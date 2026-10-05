
let num1, num2, operator, correctAnswer;
let score = 0;
const operators = ["+", "-", "*"];
 
function generateQuestion() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    let index = Math.floor(Math.random() * 3);
    operator = operators[index];

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } 
    else if (operator === "-") {
        correctAnswer = num1 - num2;
    } 
    else if (operator === "*") {
        correctAnswer = num1 * num2;
    }
    document.getElementById("question").textContent = `${num1} ${operator} ${num2}`;
}
 
function checkAnswer() {
    let answer = document.getElementById("answer");
    let message = document.getElementById("message");
    let userInput = answer.value.trim();
    let userAnswer = Number(userInput);

    if (userInput !== "" && userAnswer === correctAnswer) {
        score++;
        message.style.color = "green";
        message.textContent = "Correct!";
    } 
    else {
        message.style.color = "red";
        message.textContent = "Wrong! Correct answer was " + correctAnswer;
    }

    document.getElementById("score").textContent = score;
    answer.value = "";


    if (score >= 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    } 
    else {
        generateQuestion();
    }
}


function playAgain() {
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "";
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";

    generateQuestion();
}

generateQuestion();