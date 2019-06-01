var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses = 12;
var lettersGuessed = [];
var movies = ["Top Gun","Terminator","The Goonies","Indiana Jones","The Breakfast Club","Back to the Future", "Ghostbusters"];
var hint = ["Danger Zone", "I'll be back", "Truffle Shuffle", "Booby Traps","Detention","Delorian","Who ya gonna call?"];
var answer = [];

var userGuess;
var randomIndex = Math.floor(Math.random() * movies.length); // Create random index number that can be used by both arrays "movies" and "hint"
var computerChoice = movies[randomIndex];
document.getElementById("hint").innerHTML = hint[randomIndex]; // Show correct hint when computer chooses movie.
console.log (computerChoice);

for (var i = 0; i < computerChoice.length; i++){
        answer[i] = "_";
}

// Start the game when a user presses any key 
document.onkeypress = function(event) {
        userGuess = event.key;


        //Write if statement that checks if the guessed letter is in the movie title 
        if (computerChoice.indexOf(userGuess) !== -1) {
                console.log("Yep")

        }

        else {
                guesses --;
                lettersGuessed.push(userGuess);
                document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + lettersGuessed;
                document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
        }

        if (guesses === 0) {
                losses ++;
                alert("You lose! Try again");
                guesses = 12;
                randomIndex = Math.floor(Math.random() * movies.length);
                computerChoice = movies[randomIndex]; // Update movie
                document.getElementById("hint").innerHTML = hint[randomIndex]; // Update hint
                document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guesses;
                lettersGuessed = [];
                document.getElementById("userGuesses").innerHTML = "Letters already guessed: " + lettersGuessed;
                console.log(computerChoice);

        }

        //display movie poster image once user completes word


}