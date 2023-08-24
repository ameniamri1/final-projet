const questions = [
    { question: "Le théorème fondamental du calcul différentiel et intégral établit une relation entre dérivée et intégrale.", answer: true },
    { question: "La dérivée d'une constante est toujours nulle.", answer: true },
    { question: "L'intégrale définie d'une fonction est égale à l'aire sous sa courbe dans un intervalle donné.", answer: true },
    { question: "La règle de la chaîne s'applique uniquement à l'intégration.", answer: false },
    { question: "La dérivée seconde d'une fonction est la dérivée de sa dérivée première.", answer: true }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    resultElement.textContent = isCorrect ? "Correct!" : "Incorrect!";
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        resultElement.textContent = "";
        nextButton.style.display = "none";
    } else {
        questionElement.textContent = "Fin du quiz.";
        optionsElement.style.display = "none";
        resultElement.textContent = "";
        nextButton.style.display = "none";
    }
}

displayQuestion();
