const next = document.getElementById("next");
const prev = document.getElementById("prev");
const questionText = document.getElementById("questionText");
const options = document.getElementById("optionsDiv");

quiz_questions = [
  {
    id: 0,
    Question: "Q1",
    Options: ["Options1", "Options2", "Options3", "Options4"],
  },

  {
    id: 1,
    Question: "Q2",
    Options: ["Options1", "Options2", "Options3", "Options4"],
  },

  {
    id: 2,
    Question: "Q3",
    Options: ["Yes", "No"],
  },

  {
    id: 3,
    Question: "Q4",
    Options: ["Options1", "Options2", "Options3", "Options4"],
  },

  {
    id: 4,
    Question: "Q5",
    Options: ["Options1", "Options2", "Options3", "Options4"],
  },
];

var currentQuestion = 0;

questionText.innerText = quiz_questions[0].Question;
createOptions(0);

const quiz_length = quiz_questions.length;
const last_id = quiz_questions[quiz_length - 1].id;

next.onclick = function () {
  refreshOptions();
  console.log(quiz_questions[currentQuestion]);
  if (currentQuestion < quiz_length) {
    currentQuestion = (currentQuestion + 1) % quiz_length;
    questionText.innerHTML = quiz_questions[currentQuestion].Question;
    createOptions(currentQuestion);
  } else {
    currentQuestion = 0;
  }
};

prev.onclick = function () {
  refreshOptions();
  if (currentQuestion === 0) {
    currentQuestion = quiz_length - 1;
    questionText.innerHTML = quiz_questions[currentQuestion].Question;
    createOptions(currentQuestion);
  } else {
    currentQuestion = currentQuestion - 1;
    questionText.innerHTML = quiz_questions[currentQuestion].Question;
    createOptions(currentQuestion);
  }
};

function createOptions(currentQuestionIndex) {
  for (
    var optionIndex = 0;
    optionIndex < quiz_questions[currentQuestionIndex].Options.length;
    optionIndex++
  ) {
    options.appendChild(returnOptionElement(currentQuestionIndex, optionIndex));
  }
}

function returnOptionElement(currentQuestionIndex, currentOption) {
  const div = document.createElement("div");
  div.className = "form-check";

  const input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "checkbox";

  const label = document.createElement("label");
  label.className = "form-check-label";
  label.htmlFor = "flexCheckDefault";
  label.innerHTML = quiz_questions[currentQuestionIndex].Options[currentOption];

  div.appendChild(input);
  div.appendChild(label);

  return div;
}

/**
 * Clears the options when next or prev is pressed
 */
function refreshOptions() {
  while (options.hasChildNodes()) {
    options.removeChild(options.firstChild);
  }
}
