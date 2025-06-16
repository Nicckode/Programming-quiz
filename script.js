const allQuestions = [
  {
    question: "¿Cuál es el lenguaje principal del navegador?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
      { text: "PHP", correct: false }
    ]
  },
  {
    question: "¿Qué etiqueta se usa para insertar una imagen en HTML?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<src>", correct: false },
      { text: "<pic>", correct: false }
    ]
  },
  {
    question: "¿Qué propiedad en CSS cambia el color del texto?",
    answers: [
      { text: "background", correct: false },
      { text: "font-weight", correct: false },
      { text: "color", correct: true },
      { text: "text-style", correct: false }
    ]
  },
  {
    question: "¿Qué significa HTML?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Mark Language", correct: false },
      { text: "Hyper Markup Language", correct: false }
    ]
  },
  {
    question: "¿Qué propiedad en CSS se usa para centrar texto?",
    answers: [
      { text: "align-text", correct: false },
      { text: "text-align", correct: true },
      { text: "center", correct: false },
      { text: "font-align", correct: false }
    ]
  },
  {
    question: "¿Cuál es la forma correcta de declarar una variable en JS?",
    answers: [
      { text: "let x = 5;", correct: true },
      { text: "var: x = 5", correct: false },
      { text: "x := 5", correct: false },
      { text: "int x = 5", correct: false }
    ]
  },
  {
    question: "¿Qué método convierte texto en mayúsculas en JS?",
    answers: [
      { text: "toUpperCase()", correct: true },
      { text: "capitalize()", correct: false },
      { text: "toCaps()", correct: false },
      { text: "upper()", correct: false }
    ]
  },
  {
    question: "¿Cuál es la forma correcta de escribir un comentario en CSS?",
    answers: [
      { text: "// comentario", correct: false },
      { text: "# comentario", correct: false },
      { text: "/* comentario */", correct: true },
      { text: "<!-- comentario -->", correct: false }
    ]
  },
  {
    question: "¿Qué unidad es relativa al tamaño de fuente del elemento?",
    answers: [
      { text: "px", correct: false },
      { text: "em", correct: true },
      { text: "%", correct: false },
      { text: "vh", correct: false }
    ]
  },
  {
    question: "¿Qué hace `querySelector()` en JS?",
    answers: [
      { text: "Selecciona múltiples elementos", correct: false },
      { text: "Selecciona un elemento por ID", correct: false },
      { text: "Selecciona el primer elemento que coincide con un selector", correct: true },
      { text: "Crea un nuevo elemento", correct: false }
    ]
  },
  {
    question: "¿Qué evento se usa al hacer clic en un botón?",
    answers: [
      { text: "onchange", correct: false },
      { text: "onclick", correct: true },
      { text: "oninput", correct: false },
      { text: "onsubmit", correct: false }
    ]
  },
  {
    question: "¿Cuál es el resultado de '2' + 2 en JS?",
    answers: [
      { text: "4", correct: false },
      { text: "'22'", correct: true },
      { text: "NaN", correct: false },
      { text: "Error", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de lenguaje es JavaScript?",
    answers: [
      { text: "Compilado", correct: false },
      { text: "Interpretado", correct: true },
      { text: "Ensamblador", correct: false },
      { text: "Ninguno", correct: false }
    ]
  },
  {
    question: "¿Qué palabra clave se usa para funciones en JS?",
    answers: [
      { text: "method", correct: false },
      { text: "define", correct: false },
      { text: "function", correct: true },
      { text: "func", correct: false }
    ]
  },
  {
    question: "¿Qué operador se usa para comparar igualdad estricta?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
      { text: "=", correct: false }
    ]
  },
  {
    question: "¿Cuál es la propiedad CSS para fondo?",
    answers: [
      { text: "bg-color", correct: false },
      { text: "background-color", correct: true },
      { text: "color-bg", correct: false },
      { text: "background", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de dato es `[1, 2, 3]` en JS?",
    answers: [
      { text: "String", correct: false },
      { text: "Object", correct: true },
      { text: "Number", correct: false },
      { text: "Function", correct: false }
    ]
  },
  {
    question: "¿Qué etiqueta crea una lista ordenada?",
    answers: [
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: true },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false }
    ]
  },
  {
    question: "¿Qué significa CSS?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Creative Style Syntax", correct: false },
      { text: "Coding Sheet Syntax", correct: false }
    ]
  },
  {
    question: "¿Qué función convierte a número en JS?",
    answers: [
      { text: "parseNumber()", correct: false },
      { text: "int()", correct: false },
      { text: "parseInt()", correct: true },
      { text: "toNumber()", correct: false }
    ]
  }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  questions = shuffle([...allQuestions]).slice(0, 5); // random 5
  nextButton.innerText = "Siguiente";
  showQuestion();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerText = `Tu puntuación: ${score} de ${questions.length}`;
  nextButton.innerText = "Reiniciar";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
