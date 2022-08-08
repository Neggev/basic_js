// Create a webpage that allows a user to guess a number 1 through 10 (inclusive).
// Use Local Storage to keep track of how many times the user got it right.
// Display a message if they got it wrong or right. Also, make sure to display their
// score in a cool way!


// set a loop for 2 players to compete
// get random number  between 1 and 10.
// get guess from user.
// compare results.
// present score.
//======================================================================================//

// random value generated
function getRndNum(){
var rndNum = Math.floor(Math.random() * 10 + 1);
localStorage.setItem("rndNum", rndNum);
}
getRndNum();

// counter of the number of guesses
var guess = 0;
localStorage.setItem('NumberOfGuesses', guess);

// some veriables for keeping score and indicators.
var playerIndicator = 1;
localStorage.setItem("player", playerIndicator);
var playerOneScore = 0;
localStorage.setItem("score1", playerOneScore);
var playerTwoScore = 0;
localStorage.setItem("score2", playerTwoScore);
var playerOneCount = 0;
localStorage.setItem("count1", playerOneCount);
var playerTwoCount = 0
localStorage.setItem("count2", playerTwoCount);
let guessBtn = document.querySelector('.guessSubmit');

var playerOneHeader = document.querySelector('.playerOne');
var playerTwoHeader = document.querySelector('.playerTwo');
var playerTurn = document.querySelector('.playerTurn');


if (localStorage.getItem('player')  === 1) {
    playerTurn.textContent = "it's 1st player's Turn";
}
if(localStorage.getItem('player') === 2){
    playerTurn.textContent += "it's 2nd player's Turn";
}



    guessBtn.addEventListener('click', function getFname() {

        console.log("Hello there");

        // user input

        var userInput = document.getElementById("guessField").value;
        localStorage.setItem("userInput", userInput);

        if (userInput == JSON.parse(window.localStorage.getItem("rndNum"))) {
            localStorage.setItem("NumberOfGuesses", guess);
            if(playerIndicator === 1){
                playerOneScore++;
                localStorage.setItem("score1", playerOneScore);
                playerOneCount++;
                localStorage.setItem("playerOneCount", playerOneCount);
                playerIndicator++;
                localStorage.setItem("player", playerIndicator);

                alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
                   (window.localStorage.getItem('playerOneCount'))  + " Guesses");

                getRndNum();
                
            }
            else{
                playerTwoScore++;
                localStorage.setItem("score2", playerTwoScore);
                playerTwoCount++;
                localStorage.setItem("playerTwoCount", playerTwoCount);
                playerIndicator--;
                localStorage.setItem("player", playerIndicator);

                alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
                   (window.localStorage.getItem('playerTwoCount'))  + " Guesses");

                getRndNum()
            }



        } else if (userInput > localStorage.getItem('rndNum')) {
            // hint if user input is larger then rndNum         
            guess++;   
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
            localStorage.setItem('NumberOfGuesses', guess);
            if(playerIndicator === 1){
                playerOneCount++;
                localStorage.setItem("playerOneCount", playerOneCount);
                playerIndicator++;
                localStorage.setItem("player", playerIndicator);
                getRndNum()
                
            }
            else{
                playerTwoCount++;
                localStorage.setItem("playerTwoCount", playerTwoCount);
                playerIndicator--;
                localStorage.setItem("player", playerIndicator);
                getRndNum()
            }

        } else {
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
            guess++;
            localStorage.setItem('NumberOfGuesses', guess++);
            if(playerIndicator === 1){
                playerOneCount++;
                localStorage.setItem("playerOneCount", playerOneCount);
                playerIndicator++;
                localStorage.setItem("player", playerIndicator);
                getRndNum()
            }
            else{
                playerTwoCount++;
                localStorage.setItem("playerTwoCount", playerTwoCount);
                playerIndicator--;
                localStorage.setItem("player", playerIndicator);
                getRndNum()
            }
        }


    })
