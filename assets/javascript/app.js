
//make sure document ready before page loads
$(document).ready(function() {

      // Here we are provided an initial array of letters.
      var question1 = {
      	question:"Which of these actors played in the movie Forrest Gump?", 
      	answer1:"Tom Brady", 
      	answer2:"Tom Cruise", 
      	answer3:"Tom Petty", 
      	answer4:"Tom Hanks"};

      $("#question").html(question1.question);
     

    });