const questionNumber = document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionContainer = document.querySelector('.option-container');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;


function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i])

  }
};

function getNewQuestion() {
  questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + quiz.length;

  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  console.log(questionIndex);
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  const index1 = availableQuestions.indexOf(questionIndex);
  availableQuestions.splice(index1, 1);
  console.log(questionIndex);
  console.log(availableQuestions);

  const optionLen = currentQuestion.options.length

  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i)
  };
  optionContainer.innerHTML = '';

  for (let i = 0; i < optionLen; i++) {
    const option = document.createElement('div');

    option.innerHTML = currentQuestion.options[i];
    option.id = i;
    option.className = 'option';
    optionContainer.appendChild(option);
    option.setAttribute('onclick', 'getResult(this)');
  };
  questionCounter++
};

function getResult(element) {
  const id = parseInt(element.id);
  if (id === currentQuestion.answer) {
    console.log('answer is correct');
    element.classList.add('correct');
    correctAnswers++
    
  }
  else {
    console.log('answer is wrong');
    element.classList.add('wrong');
  }
  unclickableOptions();
}

function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add('already-answered');
  }
}

function next() {
  if (questionCounter === quiz.length) {
    console.log('quiz over');
    quizOver();
  }
  else {
    getNewQuestion();
  }
};

function quizOver() {
  quizBox.classList.add('hide');
  resultBox.classList.remove('hide');
  quizResult();
}

function quizResult() {
  console.log('test1')
  // quizBox.querySelector('.total-question').innerHTML = 
  resultBox.querySelector('.total-correct').innerHTML = correctAnswers;
  resultBox.querySelector('.total-wrong').innerHTML = quiz.length - correctAnswers;
  resultBox.querySelector('.total-score').innerHTML = correctAnswers + ' / ' + quiz.length;
};
function resetQuiz(){
  questionCounter = 0;
  correctAnswers = 0;
  setAvailableQuestions();
  getNewQuestion();
  
};
function tryAgain(){
  quizBox.classList.remove('hide');
  resultBox.classList.add('hide');
  resetQuiz();
}
window.onload = function() {
  setAvailableQuestions();
  getNewQuestion();
};