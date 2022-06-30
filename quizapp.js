const quizData = [
    {
        question: "How many states are there in India ? ",
        a: "25",
        b: "17",
        c: "28",
        d: "31",
        correct: "c",
    },
    {
        question: "When was Punjab and Haryana got separated ?",
        a: "1943",
        b: "1984",
        c: "1959",
        d: "1966",
        correct: "d",
    },
    {
        question: "Which of the following book is not written by Dr. A.P.J. Abdul Kalam?",
        a: "Failure to Success: Legendary Lives",
        b: "A House for Mr. Biswas",
        c: "Ignited Minds",
        d: "You Are Born to Blossom",
        correct: "b",
    },
    {
        question: "Who wrote original draft of Preamble of Indian Constitution?",
        a: "Pandit Nehru",
        b: "Dr. BR Ambedkar",
        c: "Alladi Krishnaswamy Iyer",
        d: "MK Gandhi",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Click to Try Again</button>`;
        }
    }
});