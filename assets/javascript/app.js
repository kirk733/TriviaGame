
//make sure document ready before page loads
$(document).ready(function() {

 	//variable declaration
	var wins = 0;
	var losses = 0;
	var totalScore = 0;

	//variable declaration and initialize values
	var randomNumber = Math.floor(Math.random() * 101) + 19;
	var blue = Math.floor(Math.random() * 12) + 1;
	var red = Math.floor(Math.random() * 11) + 2;
	var diamond = Math.floor(Math.random() * 10) + 3;
	var green = Math.floor(Math.random() * 9) + 4;

	//write initial values to page
	$("#wins").html("" + wins);
	$("#losses").html("" + losses);
	$("#randomNumber").html("" + randomNumber);

	//button on clicks
	$("#button1").on("click", function() {
  		totalScore = totalScore + blue;
 		 $("#totalScore").html("" + totalScore);
 		 winLoss ();
	});

	$("#button2").on("click", function() {
  		totalScore = totalScore + red;
 		 $("#totalScore").html("" + totalScore);
 		 winLoss ();
	});

	$("#button3").on("click", function() {
  		totalScore = totalScore + diamond;
 		 $("#totalScore").html("" + totalScore);
 		 winLoss ();
	});

	$("#button4").on("click", function() {
  		totalScore = totalScore + green;
 		 $("#totalScore").html("" + totalScore);
 		 winLoss ();
	});

	//check for win or loss and reset variables if true
	function winLoss(){
		if (randomNumber === totalScore) {
    	wins++
    	$("#wins").html("" + wins);
    	resetVariables();
    	};
    

		if (totalScore > randomNumber) {
    	losses++	
    	$("#losses").html("" + losses);
    	resetVariables ();
  		};
  	};


  	//resetVariables and write to page	
  	function resetVariables(){
  		randomNumber = Math.floor(Math.random() * 101) + 19;
		blue = Math.floor(Math.random() * 12) + 1;
		red = Math.floor(Math.random() * 11) + 2;
		diamond = Math.floor(Math.random() * 10) + 3;
		green = Math.floor(Math.random() * 9) + 4;
		totalScore = 0;
		$("#totalScore").html("" + totalScore);
		$("#randomNumber").html("" + randomNumber);

  		};


	
	


});