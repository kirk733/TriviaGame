
//make sure document ready before page loads
$(document).ready(function() {

     // Here we are provided an initial array of letters.
     var question1 = {
      	question:"Which of these actors played in the movie Forrest Gump?", 
      	answer1:"Tom Brady", 
      	answer2:"Tom Cruise", 
      	answer3:"Tom Petty", 
      	answer4:"Tom Hanks"};

      	$("#question1").html(question1.question);
      	$("#answer1").html(question1.answer1);
      	$("#myRadio").attr("value",question1.answer2);

    //  	function myFunction() {
   // var x = document.createElement("INPUT");
   // x.setAttribute("type", "radio", "value");
   // document.#answer2.appendChild(x);
    //$("#myRadio").prop("value", answer2)
//}

    });