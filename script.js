//window.onload=function(){
    //debugger
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");
var messageBox = document.querySelector("#message-box");
var displayScore = document.querySelector("#display");
var time = document.querySelector("#time");
var title = document.querySelector("#title");
var quizContainer = document.querySelector("#quizContainer")

var questionEl = document.querySelector("#question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var options = document.querySelector(".option")
var nextButton = document.getElementById("nextButton");
var textInput

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;



var questions = [{
  "question":"Inside which HTML element do we put a Javascript tag?",
  "option1": "<head>",
  "option2":"<script>",
  "option3":"<body>",
  "option4" : "<div>",
  "answer" : "2"
},{
  "question":"Where is the correct place to put a Javascript tag?",
  "option1": "<head>",
  "option2":"<script>",
  "option3":"<body>",
  "option4" : "<div>",
  "answer" : "2",
},{
  "question":"Does an external Javascript file need a <script> tag?",
  "option1": "I don't know",
  "option2":"Who cares?",
  "option3":"Yes",
  "option4" : "No",
  "answer" : "2",
},{
  "question":"What is the syntax for creating a function in JS?",
  "option1": "funtion myFunction()",
  "option2":"createFunction myFunction()",
  "option3":"function:myFunction()",
  "option4" : "function = myFunction",
  "answer" : "1",
}];

//if (startButton) {
    startButton.addEventListener("click",startUp);
//};
//};
function startUp() {
var timeoutHandle;

  function countdown(minutes, seconds) {
    var seconds = 60;
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
    }
    tick();
  }

  countdown(2);
  loadQuestion(currentQuestion);
}

function loadQuestion (questionIndex) {
  let q = questions[questionIndex];
  question.El.textContent = (questionIndex + 1) + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textcontent = q.option4;
  
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
  }

  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions-1){
    nextButton.textContent = "Finish";
  }

  if (currentQuestion == totQuestions){
    quizContainer.style.display = "none";

  }
}
