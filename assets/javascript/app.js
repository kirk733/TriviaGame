
//make sure document ready before page loads
$(document).ready(function() {


     // Here we are provided an initial array of letters.

     var numQues = 1;
     var question1 = {
      	question:"Which of these actors played in the movie Forrest Gump?", 
      	answer1:"Tom Brady", 
      	answer2:"Tom Cruise", 
      	answer3:"Tom Petty", 
      	answer4:"Tom Hanks"};

     var question2 = {
      	question:"What movie did this famous qoute come from 'My biological clock is ticking'?", 
      	answer1:"Joe Dirt", 
      	answer2:"Your mama", 
      	answer3:"My Cousin Vinny", 
      	answer4:"My Cousin Desiree"};

    var question3 = {
      	question:"In the movie back to the future who said, 'What is a jigwatt?", 
      	answer1:"Michael Jordan", 
      	answer2:"Michael Jackson", 
      	answer3:"Michael J Fox", 
      	answer4:"Michael Stamps"};

    var question4 = {
      	question:"Which of these actors played in the movie Forrest Gump?", 
      	answer1:"Tom Brady", 
      	answer2:"Tom Cruise", 
      	answer3:"Tom Petty", 
      	answer4:"Tom Hanks"};

    var question5 = {
      	question:"Which of these actors played in the movie Forrest Gump?", 
      	answer1:"Tom Brady", 
      	answer2:"Tom Cruise", 
      	answer3:"Tom Petty", 
      	answer4:"Tom Hanks"};

    var question6 = {
      	question:"Which of these actors played in the movie Forrest Gump?", 
      	answer1:"Tom Brady", 
      	answer2:"Tom Cruise", 
      	answer3:"Tom Petty", 
      	answer4:"Tom Hanks"};

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
				$("#question1").html(question1.question);
      			$('label[for=answer1]').html(question1.answer1);
      			$('label[for=answer2]').html(question1.answer2);
      			$('label[for=answer3]').html(question1.answer3);
      			$('label[for=answer4]').html(question1.answer4);
      		console.log(numQues);
      		console.log(question1.answer1)
      		};
      		};

    

    });


