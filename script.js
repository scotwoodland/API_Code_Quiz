// Setup initial variables for the quiz, timer, and the questions index.
var myQuiz = $("#quizContainer");
var timer;
var userAnswer;
var currentIndex = 0;
var startQuiz = document.getElementById("startQuiz");

// Setup the questions in an array format so that we can return the correct buttons for answers. 
var questions = [
  {
    title: "Are Java and JavaScript the same language?",
    choices: ["Yes!", "No.", "Only in Mac.", "What's JavaScript?"],
    answer: "No."
  },
  {
    title: "Is JavaScript a front-end, back-end, or full-stack programming language?",
    choices: ["Front-end", "Back-end", "Full-stack", "What's JavaScript?"],
    answer: "Full-stack"
  },
  {
    title: "Which of the following is not a reserved word in JavaScript?",
    choices: ["default", "finally", "throw", "undefined"],
    answer: "undefined"
  },
  {
    title: "True or false... 'Null' is an object.",
    choices: ["True", "False"],
    answer: "True"
  },
  {
    title: "What does the following expression return? '!false'",
    choices: ["null", "true", "undefined", "false"],
    answer: "true"
  }
];

// Setup the countdown timer. 
function startTimer() {
  displayQuestion();
  
  timer = setInterval(function() {
    secondsRemaining -= 1;
    console.log(secondsRemaining);
    
    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsRemaining;
    
    if (secondsRemaining === 0) {
      clearInterval(timer);
      getUserName();
    }
  }, 1000);
}

// Timer starter button
startQuiz.onclick = startTimer;

var secondsRemaining = questions.length * 15;
var answer = questions[answer];

// Setup the question displays for the page 
function displayQuestion() {
  document.getElementById("quizQuestion").innerHTML = "";
  document.getElementById("card-body").innerHTML = "";
  
  var titleElement = document.createElement("h1");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;
  
  var cardHeader = document.getElementById("quizQuestion");
  cardHeader.appendChild(titleElement);
  
  var choices = questions[currentIndex].choices;
  
  // For loop
  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    var cardBody = document.getElementById("card-body");
    cardBody.appendChild(choicesElement);
    choicesElement.textContent = choices[i];
    choicesElement.onclick = isCorrectAnswer;
  }
  console.log(choices);
}

// Find answer and determine if it is correct or incorrect 
function isCorrectAnswer() {
  var answer = questions[currentIndex].answer;
  userAnswer = this.innerHTML;

  if (userAnswer === answer) {
    console.log("answer correct");
  } else if (userAnswer !== answer) {
    removeTime();
    console.log("answer incorrect");
  }
  currentIndex++;
  if (currentIndex === questions.length) {
    console.log(getScore());
    clearInterval(timer);
  }

  displayQuestion();
  console.log("finish isCorrectAnswer");
}

// Add functions for timer and score 
function addTime() {
  secondsRemaining += 15;
}

function removeTime() {
  secondsRemaining -= 15;
}

function getScore() {
  return secondsRemaining;
}

// Thought I'd need these but didn't. Kept in there just in case.
function getUserInfo() {}

function saveScore() {}

console.log(questions);

// Setup return of name and insertion into the localStorage.
var userName;

function getUserName() {
  userName = "Welcome " + prompt("Please Enter your Name:");
  localStorage.setItem("Name", userName);

  if ((userName = "")) {
    alert("Please enter your name");
  }
}

function getUserScore() {
  localStorage.setItem("Score", secondsRemaining);
}

function displayHighscores() {
  document.getElementById("names").innerHTML = localStorage.getItem("Name");
  document.getElementById("scores").innerHTML = localStorage.getItem("Score");
}

// Enable the functions
getUserScore();
getUserName();
displayHighscores();