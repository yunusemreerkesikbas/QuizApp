const quizData = [
    {
        question: 'Ben kaç yaşındayım?',
        a: "15",
        b: "19",
        c: "20",
        d: "21",
        correct: "c",
    },
    {
        question: "Hangisi JS framework ü değildir?",
        a: "Angular",
        b: "React",
        c: "Vue",
        d: "Django",
        correct: "d",
    },
    {
        question: "Türkiyenin başkenti neresidir?",
        a: "İstanbul",
        b: "Ankara",
        c: "Konya",
        d: "Çorum",
        correct: "b",
    },
    {
        question: "2019 da en çok kullanılan programlama dili hangisi?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "a",
    }
]


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
    })
}




submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> Test sorularında ${score}/${quizData.length} doğru cevapladınız</h2> <button onClick = "location.reload()">Yenile</button>`;
        }
    }
})

