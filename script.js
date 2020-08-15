var myQuiz = $("#quizContainer");
var timer;
var userAnswer;
var currentIndex = 0;
var startQuiz = document.getElementById("startQuiz");

// Quiz Questions put into an index:
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


function startTimer() {
  displayQuestion();
  
  timer = setInterval(function() {
    secondsRemaining -= 1;
    console.log(secondsRemaining);
    
    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsRemaining;
    
    if (secondsRemaining === 0) {
      clearInterval(timer);
      // window.location.href = "highscore.html";
    }
  }, 1000);
}

startQuiz.onclick = startTimer;

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

function addTime() {
  secondsRemaining += 15;
}

function removeTime() {
  secondsRemaining -= 15;
}

function getScore() {
  return secondsRemaining;
}
// Not sure this will work - just try it out
// ---------------------------

function getUserInfo() {}

function saveScore() {}

console.log(questions);

//----------------------------------------------------------------------------
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

function getUserScore() {
  localStorage.setItem("Score", secondsRemaining);
}

getUserName();
getUserScore();

// ------------------------------------
// function scorePoints() {
//   var points = JSON.parse(localStorage.secondsRemaining || '[]');
//   var ol = document.getElementById("Score");
//   ol.innerHTML = '';
//   for (var i = 0; i < points.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = points[i];
//       ol.appendChild(li);
//   }
// }
// scorePoints();

// -----------------------------

// var highscores = JSON.parse(localStorage.getItem("getScore")) || [];

// submitButton.addEventListener("click", function(event){
//   event.stopPropagation();
//   console.log("click");
  
//   var userName = inputLine.value;
//   var secondsRemaining = {userName, secondsRemaining};


//   // Send to localStorage

//   highscores.push(secondsRemaining);
//   localStorage.setItem("highscores", JSON.stringify(highscores));

// });

function displayHighscores() {
  document.getElementById("names").innerHTML = localStorage.getItem("Name");
  document.getElementById("scores").innerHTML = localStorage.getItem("Score");
}
