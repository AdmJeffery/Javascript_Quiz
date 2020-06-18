//window.onload=function(){
    //debugger
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var timer = document.querySelector("#timer");
var messageBox = document.querySelector("#message-box");
var displayScore = document.querySelector("#display");
var time = document.querySelector("#time");
var title = document.querySelector("#title");

var questions = [{
  "question":"Inside which HTML element do we put a Javascript tag?",
  "option1": "<head>",
  "option 2":"<script>",
  "option 3":"<body>",
  "option 4" : "<div>",
  "answer" : "2"
},{
  "question":"Where is the correct place to put a Javascript tag?",
  "option1": "<head>",
  "option 2":"<script>",
  "option 3":"<body>",
  "option 4" : "<div>",
  "answer" : "2",
},{
  "question":"Does an external Javascript file need a <script> tag?",
  "option1": "I don't know",
  "option 2":"Who cares?",
  "option 3":"Yes",
  "option 4" : "No",
  "answer" : "2",
},{
  "question":"What is the syntax for creating a function in JS?",
  "option1": "funtion myFunction()",
  "option 2":"createFunction myFunction()",
  "option 3":"function:myFunction()",
  "option 4" : "function = myFunction",
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
}