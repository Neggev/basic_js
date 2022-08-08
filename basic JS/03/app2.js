// Create a webpage that allows a user to guess a number 1 through 10 (inclusive).
// Use Local Storage to keep track of how many times the user got it right.
// Display a message if they got it wrong or right. Also, make sure to display their
// score in a cool way!



// get random number  between 1 and 10.
// get guess from user.
// compare results.
// present score.
//======================================================================================//

    // random value generated
    var rndNum = Math.floor(Math.random() * 10 + 1);
    localStorage.setItem("rndNum", rndNum);

    // counter of the number of guesses
    var guess = 1;
    localStorage.setItem('NumberOfGuesses', guess);

    let guessBtn = document.querySelector('.guessSubmit');

    guessBtn.addEventListener('click', function getFname(){

        let body = document.body;
        let score = document.querySelector('.score');
        console.log("Hello there");

            // user input

            var userInput = document.getElementById("guessField").value;
            localStorage.setItem("userInput", userInput);

            if (userInput == JSON.parse(window.localStorage.getItem("rndNum"))) {
                alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
                    guess + " GUESS ");
                    localStorage.setItem("NumberOfGuesses", guess);
 


            } else if (userInput > localStorage.getItem('rndNum')){
                // hint if user input is larger then rndNum            
                guess++;
                alert("OOPS SORRY!! TRY A SMALLER NUMBER");
                localStorage.setItem('NumberOfGuesses', guess);

            } else {
                guess++;
                alert("OOPS SORRY!! TRY A GREATER NUMBER")
                localStorage.setItem('NumberOfGuesses', guess);
             
            }


        })
