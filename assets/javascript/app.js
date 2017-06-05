
//make sure document ready before page loads
$(document).ready(function() {


     // Here we are provided an initial array of letters.

     var numQues = 0;
     var wins = 0;
     var losses = 0;
     var myTimer= 20;


     var question = ["Which of these actors played in the movie Forrest Gump?", 
      	"What movie did this famous qoute come from 'My biological clock is ticking'?"];

     var answer1 = ["Tom Brady", "Joe Dirt"];
     var answer2 = ["Tom Cruise", "Your mama"];
     var answer3 = ["Tom Petty", "My Cousin Vinny"];
     var answer4 = ["Tom Hanks", "My Cousin Desiree"];
     var trueAnswer = ["Tom Hanks", "My Cousin Vinny"];

      	//$("#myList").hide();
		$("input").hide();	
		$("label").hide();
		$("#button2").hide();

      	$("#button1").on("click", function() {
      		$("input").show();	
			$("label").show();
			$("#button2").show();
			$("#button1").hide();
			answerQuestion();
			newTimer(myTimer); 

      	});

      	$("#button2").on("click", function() {
      		console.log(numQues);
      		if(numQues< 2){
      		checkAnswer();
      		answerQuestion();
      		}
      		else{
      			checkAnswer();
      			displayFinals();
      		}

      		

      	});

      	function newTimer(seconds){
  			var nextSecond = seconds - 1;
  			var minutes = parseInt(seconds / 60, 10);
 			 var currentSeconds = parseInt(seconds % 60, 10);
      			minutes = minutes < 10 ? "0" + minutes : minutes;
      			currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
  				var time = "" + minutes + ":" + currentSeconds;
  
  			$("#timer").text(time);
  				if (nextSecond === 0) {
  					$("#ranOut").html("Ran out of Time! GAME OVER!!");
    				displayFinals();
  				}else {
    				setTimeout( function() {
    					newTimer(nextSecond);
    				}, 1000);
  				}
			};

      	
      	function answerQuestion(){
      		// Inside the on-click event...
      		if(numQues <= 2){
				$("#question1").html(question[numQues]);
      			$('label[for=answer1]').html(answer1[numQues]);
      			$('label[for=answer2]').html(answer2[numQues]);
      			$('label[for=answer3]').html(answer3[numQues]);
      			$('label[for=answer4]').html(answer4[numQues]);
      			numQues++
      		};
      		};

      	function checkAnswer(){	
    		var w = document.getElementById("test1").checked;
    		var x = document.getElementById("test2").checked;
    		var y = document.getElementById("test3").checked;
    		var z = document.getElementById("test4").checked;
    			if(w == true){
    				retAnswer = answer1[numQues-1];
    			}
    			if(x == true){
    				retAnswer = answer2[numQues-1];
    			}
    			if(y == true){
    				retAnswer = answer3[numQues-1];
    			}
    			if(z == true){
    				retAnswer = answer4[numQues-1];
    			}

    			if (trueAnswer[numQues-1] === retAnswer){
    				wins++
    			}

    			else {
    				losses++
    			}

			};

		function displayFinals(){
			$("input").hide();	
			$("label").hide();
			$("#button1").hide();
			$("#button2").hide();
			$("#question1").hide();
			$("#Wins").html("Wins =" + wins);
			$("#Losses").html("Losses =" + losses);
			$("#timer").hide();
		}

    });


