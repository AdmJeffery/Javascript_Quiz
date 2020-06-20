
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");
var messageBox = document.querySelector("#message-box");
var displayScore = document.querySelector("#display");
var time = document.querySelector("#time");
var title = document.querySelector("#title");
var quizContainer = document.querySelector("#quizContainer")
var highScoreList = document.querySelector("highscorelist")

var questionEl = document.querySelector("#question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var options = document.querySelector(".option")
var nextButton = document.getElementById("nextButton");
var displayScore = document.querySelector("#displayScore");

var currentQuestion = 0;
var score = 0;

var seconds = 0;


var questions = [{
  question :"Inside which HTML element do we put Javascript code? ",
  option1: "<head>",
  option2:"<script>",
  option3:"<body>",
  option4: "<div>",
  answer: "2"
},{
  question:"Where is the correct place to put a <script> tag?",
  option1: "<head>",
  option2:"<script>",
  option3:"<body>",
  option4:"<div>",
  answer: "3"
},{
  question :"Does an external Javascript file need a <script> tag?",
  option1: "I don't know",
  option2:"Who cares?",
  option3:"Yes",
  option4:"No",
  answer: "4"
},{
  question :"What is the syntax for creating a function in JS?",
  option1 : "function myFunction()",
  option2 :"createFunction myFunction()",
  option3 :"function:myFunction()",
  option4  : "function = myFunction",
  answer : "1"
}];
var totQuestions = questions.length;

    startButton.addEventListener("click",startUp);

function startUp() {
var timeoutHandle;

  function countdown(minutes, seconds) {
    seconds = 60;
    var mins = minutes

    function tick() {

      var current_minutes = mins - 1
      seconds--;
      timer.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);

        }
      }
      if (seconds === 0){
        alert ("Time's up!")
        gameOver();
      }
    }
    tick();
  }

  countdown(1);
  loadQuestion(currentQuestion);

  startButton.style.display="none"
  
  
}

function loadQuestion (questionIndex) {

  let q = questions[questionIndex];
  questionEl.innerText = (questionIndex + 1) + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
  
};

function loadNextQuestion () {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  
  if (!selectedOption){
    alert ("Please select an answer.")
    return;
  }

  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer){
    score += 1;
    alert("Correct!");
  } else {
    alert("Incorrect.")
  }

  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions-1){
    nextButton.textContent = "Finish";
  }

  if (currentQuestion == totQuestions){
    gameOver();
    
    return;
  }
  loadQuestion(currentQuestion);
}

function gameOver () {
 quizContainer.style.display="none"
 nextButton.style.display="none"
 timer.style.display = "none";
 displayScore.textContent = "You achieved a score of" +" "+ score + " Enter your initials in the box below.";

 messageBox.style.display= "block";

let initials = document.getElementById("initials");
userInitials = initials.value.trim();

let enterBtn = document.getElementById("enterinit");

enterBtn.addEventListener("click", function (event){

  event.preventDefault();
 
  if (initials.value === ""){
    alert ("Please enter your initials")
  } else {
    let scoreObject = {
      initials: initials.value,
      score: score
    }
    
    var inputInitScore = [];
    inputInitScore = JSON.parse(localStorage.getItem("inputInitScore"));
    inputInitScore.push(scoreObject)

    localStorage.setItem("inputInitScore", JSON.stringify(inputInitScore));
    displayHighScore()
  }
  
});

function displayHighScore (){
  messageBox.style.display = "none";
  enterBtn.style.display = "none";
  displayScore.textContent = "High Scores";
  


  var highScoreList = JSON.parse(localStorage.getItem("inputInitScore"));
  
  for (i=0; i<highScoreList.length; i++) {
    let listing = document.createElement("li");

    let scoreObject = highScoreList [i];
    let htmlText = `${scoreObject.initials} - ${scoreObject.score}`;
    console.log(htmlText);

    listing.innerText = htmlText;

  document.getElementById("highscorelist").appendChild(listing);
  }
};

}
