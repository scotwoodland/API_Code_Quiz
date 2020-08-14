var myQuiz = $("#quizContainer");
var timer;
var userAnswer;
var currentIndex = 0;
var startQuiz = document.getElementById("startQuiz");

startQuiz.onclick = startTimer;

function startTimer() {
  displayQuestion();
  
  timer = setInterval(function() {
    secondsRemaining -= 1;
    console.log(secondsRemaining);
    
    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsRemaining;
    
    if (secondsRemaining === 0) {
      clearInterval(timer);
      window.location.href = "highscore.html";
    }
  }, 1000);
}

// Quiz Questions put into an index:
var questions = [
  {
    title: "The # symbol specifies that the selector is?",
    choices: ["class", "tags", "id", "css"],
    answer: "id"
  },
  {
    title: "Which HTML tag is used to define an internal style sheet?",
    choices: ["<css>", "<body>", "<script>", "<style>"],
    answer: "<style>"
  },
  {
    title: "The coding languages Java and JavaScript are the same",
    choices: ["true", "false"],
    answer: "false"
  },
  {
    title: "An algorithm is:",
    choices: [
      "A Dance",
      "A Selector in js",
      "A List of steps in order to complete a task",
      "None of the above"
    ],
    answer: "A List of steps in order to complete a task"
  },
  {
    title: "What does the following expression return? '!false'",
    choices: ["null", "true", "undefined", "false"],
    answer: "true"
  }
];

var secondsRemaining = questions.length * 15;
var answer = questions[answer];
//display questions in the div

function displayQuestion() {
  document.getElementById("quizQuestion").innerHTML = "";
  document.getElementById("card-body").innerHTML = "";
  
  var titleElement = document.createElement("h1");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;
  
  var cardHeader = document.getElementById("quizQuestion");
  cardHeader.appendChild(titleElement);
  
  var choices = questions[currentIndex].choices;
  
  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    var cardBody = document.getElementById("card-body");
    cardBody.appendChild(choicesElement);
    choicesElement.textContent = choices[i];
    choicesElement.onclick = isCorrectAnswer;
  }

  console.log(choices);
}

//it's removing 15 seconds every other question no matter what the answer is
//when it console logs it is console logs it incorrectly so something is not lining up
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
    window.location.href = "highscore.html";
  }
  displayQuestion();
  console.log("finish isCorrectAnswer");
}

function addTime() {
  secondsRemaining += 15;
}

function removeTime() {
  secondsRemaining -= 15;
}

function getScore() {
  return secondsRemaining;
}
localStorage.setItem("Score", secondsRemaining);

function getUserInfo() {}

function saveScore() {}

console.log(questions);

// All Quiz Questions
//----------------------------------------------------------------------------
var questions = [
  {
    title: "The # symbol specifies that the selector is?",
    choices: ["class", "tags", "id", "css"],
    answer: "id"
  },
  {
    title: "Which HTML tag is used to define an internal style sheet?",
    choices: ["<css>", "<body>", "<script>", "<style>"],
    answer: "<style>"
  },
  {
    title: "The coding languages Java and JavaScript are the same",
    choices: ["true", "false"],
    answer: "false"
  },
  {
    title: "An algorithm is:",
    choices: [
      "A Dance",
      "A Selector in js",
      "A List of steps in order to complete a task",
      "None of the above"
    ],
    answer: "A List of steps in order to complete a task"
  },
  {
    title: "What does the following expression return? '!false'",
    choices: ["null", "true", "undefined", "false"],
    answer: "true"
  }
];


// Highscore Screen

var userName;

//instead of prompting they need to put there name right onto the page so it can go to local storage then return as a list item.
//this way the table will stay the same when you go to the "get high scores" link

function getUserName() {
  userName = prompt("Please Enter your Name:");
  localStorage.setItem("Name", userName);

  if ((userName = "")) {
    alert("Please enter your name");
  }
}

getUserName();

function displayHighscores() {
  document.getElementById("names").innerHTML = localStorage.getItem("Name");
  document.getElementById("scores").innerHTML = localStorage.getItem("Score");
}

displayHighscores();