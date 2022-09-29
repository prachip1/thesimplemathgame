var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick =
function(){

    if(playing == true){
        location.reload(); //reload page

    }else{
        playing = true;
         score = 0;
         document.getElementById("scorevalue").innerHTML = score;
         show("timeremaining");
         timeremaining = 60;
         document.getElementById("timeremainingvalue").innerHTML = timeremaining;
         
         hide("gameover");
         
         document.getElementById("startreset").innerHTML = "Reset Game";

         startCountDown();
         
         //generate a new QnA

         generateQA();
    

    }

}


//clicking on the answer box
for(i= 1; i<5; i++){
    document.getElementById("box"+i).onclick = 
function(){
    // check if we are playing     
if(playing == true)
{
    if(this.innerHTML == correctAnswer){
         // correct answer

         // increase score by 1
         score ++;
         document.getElementById("scorevalue").innerHTML = score;
         //hide wrong box and show correct box

         hide("wrong");
         show("correct");
         setTimeout(function(){
          hide("correct");
         },1000);

         // genrate new question

         generateQA();
    }
    else{
        //wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function(){
         hide("wrong");
        },1000);

    }
}
}

}


function startCountDown(){
    action = setInterval(function(){
     
        timeremaining -=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;

        if(timeremaining == 0){
            // game over
            stopCountDown();
            show("gameover");
            document.getElementById("gameover").innerHTML = 
            "<p>Game Over!</p><p>Your Score is "+ score + " .</p>";

            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;

            document.getElementById("startreset").innerHTML = "Start Game";
        }

    },1000)
}

function stopCountDown(){
    clearInterval(action);
}

function hide(Id){
 document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){

    var x = 1+ Math.round(9 * Math.random());
    var y = 1+ Math.round(9 * Math.random());
    correctAnswer = x * y;

    document.getElementById("question").innerHTML = x + "X" + y

  var correctPosition = 1+Math.round(3*Math.random());

  document.getElementById("box"+ correctPosition).innerHTML = correctAnswer;

  //filling other boxes with wrong answers

  var answers = [correctAnswer]; // putting all answers in this array so that there will be no repeating of wrong or right answer



  for(i =1; i<5; i++){
    if(i !=correctPosition){
        var wrongAnswer;
        do{
            wrongAnswer = (1+ Math.round(9*Math.random())) * (1+ Math.round(9*Math.random())); //wrong answer
        }while(answers.indexOf(wrongAnswer)>-1)
        document.getElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer); // pushing this wronganswer to answers array so that the wronganswer wont be repeated.
    }
  }








}   