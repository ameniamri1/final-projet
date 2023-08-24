const equations = [
    { equation: "2x + 5 = 13", answer: 4 },
    { equation: "3y - 7 = 17", answer: 8 },
    { equation: "5z + 2 = 27", answer: 5 }
];

let currentEquationIndex = 0;

const equationElement = document.getElementById("equation");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function displayEquation() {
    const currentEquation = equations[currentEquationIndex];
    equationElement.textContent = currentEquation.equation;
}

function checkAnswer() {
    const currentEquation = equations[currentEquationIndex];
    const userAnswer = parseInt(answerElement.value);

    if (userAnswer === currentEquation.answer) {
        resultElement.textContent = "Correct !";
        nextButton.style.display = "block";
    } else {
        resultElement.textContent = "Incorrect. Essayez encore.";
    }
}

function nextEquation() {
    currentEquationIndex++;
    if (currentEquationIndex < equations.length) {
        displayEquation();
        answerElement.value = "";
        resultElement.textContent = "";
        nextButton.style.display = "none";
    } else {
        equationElement.textContent = "Fin du jeu.";
        answerElement.style.display = "none";
        resultElement.textContent = "";
        nextButton.style.display = "none";
    }
}

displayEquation();

document.getElementById("nextButton").addEventListener("click", nextEquation);
document.getElementById("checkButton").addEventListener("click", checkAnswer);
document.getElementById("boutonRetour").addEventListener("click", function() {
    // Utilisez la fonction de navigation pour revenir en arrière
    window.history.back();
});

