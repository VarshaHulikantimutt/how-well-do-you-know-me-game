var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name?");

console.log("Welcome "+ userName + " to How well do you know Varsha?");

// High Scores
var highScores = [
  {
    name: "Grishma",
    score: 10,
  },

  {
    name: "Varsha",
    score: 10,
  },
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())
   {
    console.log("You are right!");
    score = score + 1;
    
  } else {
    console.log("You are wrong!");
   
  }

  console.log("current score: ", score);
  console.log(" ")
}

// array of question objects
var questions = 
[{
  question: "What is my age? ",
  answer: "24"
}, 
{
  question: "Where do I live? ",
  answer: "Bangalore"
},
{
  question: "What is my go to colour? ",
  answer: "Black"
},
{
  question: "Which is my favourite season? ",
  answer: "Rainy"
},
{
  question: "What is my pet name? ",
  answer: "Varshu"
},
{
  question: "What is my favourite chat? ",
  answer: "Pani Puri"
},
{
  question: "How many siblings do I have? ",
  answer: "One"
},
{
  question: "Which is my home town? ",
  answer: "Shimoga"
},
{
  question: "Whom do I like more - Sun or Moon? ",
  answer: "Moon"
},
{
  question: "Which laptop do I have? ",
  answer: "Lenovo Thinkpad"
}
];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yayyyyyyy! You SCORED: ", score);

console.log("Check out the High scores")

for(var i=0; i<highScores.length; i++) {
  if(highScores[i].score>score){
    var scoreName = highScores[i].name;
    var highScore = highScores[i].score;
  }
}

console.log(scoreName+" "+highScore);