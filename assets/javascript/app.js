
//make sure document ready before page loads
$(document).ready(function() {


     // Here we are provided an initial array of letters.

     var numQues = 1;
     var question = ["Which of these actors played in the movie Forrest Gump?", 
      	"What movie did this famous qoute come from 'My biological clock is ticking'?"];

     var answer1 = ["Tom Brady", "Joe Dirt"];
     var answer2 = ["Tom Cruise", "Your mama"];
     var answer3 = ["Tom Petty", "My Cousin Vinny"];
     var answer4 = ["Tom Hanks", "My Cousin Desiree"];


      	//$("#myList").hide();
		$("input").hide();	
		$("label").hide();

      	$("#button1").on("click", function() {
      		$("input").show();	
			$("label").show();
      		answerQuestion(); 

      	});

      	
      	function answerQuestion(){
      		// Inside the on-click event...
      		if(numQues <= 6){
				$("#question1").html(question[0]);
      			$('label[for=answer1]').html(answer1[0]);
      			$('label[for=answer2]').html(answer2[0]);
      			$('label[for=answer3]').html(answer3[0]);
      			$('label[for=answer4]').html(answer4[0]);
      		console.log(numQues);
      		console.log(question1.answer1)
      		};
      		};

    });


