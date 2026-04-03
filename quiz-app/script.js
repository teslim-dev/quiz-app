const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Links"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is CSS used for?",
    options: ["Styling", "Database", "Server"],
    answer: "Styling"
  },
  {
    question: "What is JavaScript?",
    options: ["Programming Language", "Database", "Design Tool"],
    answer: "Programming Language"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
  }
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML =
      `<h2>Quiz Finished 🎉</h2>
       <p>Your score: ${score}/${questions.length}</p>`;
  }
}

loadQuestion();