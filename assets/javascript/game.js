$(document).ready(() => {

    var wins = 0;
    var lose = 0;
    var playerCounter = 0;
    var randomNumber;

    var redGem;
    var yellowGem;
    var greenGem;
    var blueGem;
    

    // going to see if changing the math for the random number will be the same or changes
    var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
        console.log(randomNumber);

    $("#numberToMatch").text(randomNumber);

    var blueGem = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(blueGem);
  var greenGem = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(greenGem);
  var redGem = Math.floor(Math.random () *(13 - 1)) + 1;
    console.log(redGem);
  var yellowGem = Math.floor(Math.random () * (13 -1)) + 1;
    console.log(yellowGem);


    // when I reset the playerCounter doesn't reset
    function reset(){
        
        randomNumber = Math.floor(Math.random() * (121
            - 19)) + 19;
            playerCounter = 0;
            $("#numberToMatch").text(randomNumber);
            var blueGem = Math.floor(Math.random() * (13 - 1)) + 1;
            console.log(blueGem);
          var greenGem = Math.floor(Math.random() * (13 - 1)) + 1;
            console.log(greenGem);
          var redGem = Math.floor(Math.random () *(13 - 1)) + 1;
            console.log(redGem);
          var yellowGem = Math.floor(Math.random () * (13 -1)) + 1;
            console.log(yellowGem);

    }

    $("#redGem").on("click", function() {
        playerCounter = playerCounter + redGem;

    $("#player-score").text(playerCounter);


    if (playerCounter === randomNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        // alert("You WON!!");
        $("#result").text("YOU WON!!");
            reset();
    }
    else if (playerCounter > randomNumber) {
        lose++;

        $("#lose").text("Losses: " + lose);
        // alert("Hey, You Lost!");
        $("#result").text("HEY, YOU LOST...");
        reset();
    }
    })

    $("#yellowGem").on("click", function() {
        playerCounter = playerCounter + yellowGem;

    $("#player-score").text(playerCounter);


    if (playerCounter === randomNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        // alert("You WON!!");
        $("#result").text("YOU WON!!");
            reset();
    }
    else if (playerCounter > randomNumber) {
        lose++;

        $("#lose").text("Losses: " + lose);
        // alert("Hey, You Lost!");
        $("#result").text("HEY, YOU LOST...");
        reset();
    }
    })


    $("#greenGem").on("click", function() {
        playerCounter = playerCounter + greenGem;

    $("#player-score").text(playerCounter);


    if (playerCounter === randomNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        // alert("You WON!!");
        $("#result").text("YOU WON!!");
            reset();
    }
    else if (playerCounter > randomNumber) {
        lose++;

        $("#lose").text("Losses: " + lose);
        // alert("Hey, You Lost!");
        $("#result").text("HEY, YOU LOST...");
        reset();
    }
    })


    $("#blueGem").on("click", function() {
        playerCounter = playerCounter + blueGem;

    $("#player-score").text(playerCounter);


      if (playerCounter === randomNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        // alert("You WON!!");
        $("#result").text("YOU WON!!");
            reset();
    }
    else if (playerCounter > randomNumber) {
        lose++;

        $("#lose").text("Losses: " + lose);
        // alert("Hey, You Lost!");
        $("#result").text("HEY, YOU LOST...");
        reset();
    }
    })




})
