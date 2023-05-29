const quizData = [
  {
    question: "Trafiği ile lanet ettiren şehrimiz?",
    a: "İstanbul",
    b: "Ankara",
    c: "İzmir",
    d: "Mersin",
    e: "Adana",
    correct: "a",
  },
  {
    question: "HAYAT isimli filmin yönetmeni kimdir?",
    a: "Fatih Akın",
    b: "Zeki Demirkupuz",
    c: "Didem Küçükkaraaslan",
    d: "Aslı Eren",
    e: "Onur Aslan",
    correct: "b",
  },
  {
    question: "Pi sayısı kaçtır?",
    a: "5.34",
    b: "2.24",
    c: "3.67",
    d: "3.14",
    e: "1.24",
    correct: "d",
  },
  {
    question: "Altın Palmiye ödülleri hangi şehirde verilmektedir?",
    a: "Lonra",
    b: "Berlin",
    c: "Antalya",
    d: "İstanbul",
    e: "Muğla",
    correct: "c",
  },
  {
    question: " Amerikan kıtasını 2 ye ayıran su geçidinin adı nedir?",
    a: "New Mexico",
    b: "Alaska",
    c: "Bermuda",
    d: "Süveyş",
    e: "Panama",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submit.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Yarisma tamamlandi, ${score * 20} puan aldiniz </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Deneyin </button>

        `;
    }
  }
});
