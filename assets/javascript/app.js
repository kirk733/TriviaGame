
//make sure document ready before page loads
$(document).ready(function() {


     // Setting variables and arrays

     var numQues = 0;
     var wins = 0;
     var losses = 0;
     var myTimer = 40;
     var gameRunning = true;


     var question = ["What is the first word that Forrest says in the movie?", 
      	"When young Forrest meets Elvis Presley, Elvis plays the guitar for him. Forrest later passes a TV store, and the TVs show Elvis on the Milton Berle show. Something he says or does was inspired by Forrest. What is it?",
      	"On the bus to school on the first day, Forrest meets Jenny Curran. What is the first question she asks him?",
      	"When Jenny's physically abusive father comees looking for her, Jenny makes a prayer to God to make her a bird so she can fly far, far away from there. Instead of her turning into a bird, what happens?",
      	"Forrest is discovered by the Alabama Crimson Tide football team of the University of Alabama. He is discovered when, running away from bullies, he runs across the field at superfast speed. The coach sees this and gives Forrest a spot on the team. Who is the coach?",
      	"Forrest answers the drill seargent's question of, 'What's your soul purpose in this Army?!'' with, 'To do whatever you tell me, drill seargent!'' The seargent tells Forrest that his answer was genius and he must have an I.Q. of what?",
      	"Where are Bubba and Forrest sent?",
      	"Bubba is killed in action. What are his last words to Forrest?",
      	"While recovering from the wound in the buttocks, Forrest picks up a sport. What sport is it?"];

     var answer1 = ["No", "His Famous Dance", "Are you stupid or something?", "Nothing. Mr.Curran finds her and further abuses her.", "Jack Leavenworth", "300", "Vietnam", "Thank you.", "Billards"];
     var answer2 = ["Miss", "His song, 'Hound Dog'", "What's your name?", "Jenny is taken to live with her grandmother.", "Paul 'Bear' Bryant", "1000", "Iraq", "I want to go home.", "Hockey"];
     var answer3 = ["Hello", "His clothing", "Wanna make out?", "Forrest finds her and offers her to stay at his home.", "Harold Drew", "240", "Germany", "I want some shrimp", "Ping-Pong"];
     var answer4 = ["Chocolate", "His accent", "Well, are you gonna sit down, or aren't you?", "None of the above.", "Mike DuBose", "160", "Israel", "Goodbye.", "Darts"];

     var trueAnswer = ["Hello", "His Famous Dance", "Well, are you gonna sit down, or aren't you?", "Jenny is taken to live with her grandmother.", "Paul 'Bear' Bryant", "160", "Vietnam", "I want to go home.", "Ping-Pong"];

      	//hidding items on page
		$("input").hide();	
		$("label").hide();
		$("#button2").hide();

      	$("#button1").on("click", function() {
      		$("input").show();	//show radio button
			$("label").show();  //show radio button
			$("#button2").show(); //hide button 2
			$("#button1").hide(); //hide button 1
			answerQuestion(); // call function to display question 
			newTimer(myTimer); // start timer

      	});

      	//submit answer button and load new question
      	$("#button2").on("click", function() {
      		if(numQues< question.length){
      		checkAnswer(); //checking answers
      		answerQuestion(); //loading new question
      		}
      		else{
      			checkAnswer(); //checking answers
      			displayFinals(); //display results
      			gameRunning = false; //setting to false to stop

      		}

      		

      	});

    

      	// Function sets values for question
      	function answerQuestion(){
      		// Inside the on-click event...
      		if(numQues <= question.length){
				$("#question1").html(question[numQues]);
      			$('label[for=answer1]').html(answer1[numQues]);
      			$('label[for=answer2]').html(answer2[numQues]);
      			$('label[for=answer3]').html(answer3[numQues]);
      			$('label[for=answer4]').html(answer4[numQues]);
      			numQues++
      		};
      		};

      	// Function checks radio true or false and updates wins and losses
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
		//displays results on screen and stop gameRunning..	
		function displayFinals(){
			$("input").hide();	
			$("label").hide();
			$("#button1").hide();
			$("#button2").hide();
			$("#question1").hide();
			$("#Wins").html("Correct Answers =" + wins);
			$("#Losses").html("Incorrect Answers =" + losses);
			$("#timer").hide();
			gameRunning = false;

		}
		//timer function
		function newTimer(seconds){
  			var nextSecond = seconds - 1;
  			var minutes = parseInt(seconds / 60, 10);
 			var currentSeconds = parseInt(seconds % 60, 10);
      		minutes = minutes < 10 ? "0" + minutes : minutes;
      		currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
  			var time = "" + minutes + ":" + currentSeconds;
  			
  			//updates timer also checks condition of time incase ranout wil display results or continue
  			$("#timer").text(time);
  				if (nextSecond === 0 && gameRunning == true) {
  					$("#ranOut").html("Ran out of Time! GAME OVER!!");
    				displayFinals();
  				}
  				else if(nextSecond !== 0 && gameRunning == false){
  					$("#ranOut").html("GAME OVER!!");
    				displayFinals();

  				}

  				else {
  					setTimeout( function() {
    					newTimer(nextSecond);
    				}, 1000);
  				}
		}



	

    });


