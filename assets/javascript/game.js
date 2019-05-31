var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses = 12;
var lettersGuessed = [];
var movies = ["Top Gun","Terminator","The Goonies","Indiana Jones","The Breakfast Club","Back to the Future", "Ghostbusters"];
var hint = ["Danger Zone", "I'll be back", "Truffle Shuffle", "Booby Traps","Detention","Delorian","Who ya gonna call?"];
var answer = [];

var userGuess = event.key;
var computerChoice = movies[Math.floor(Math.random() * movies.length)];
console.log (computerChoice);

for (var i = 0; i < movies.length; i++){
        answer[i] = "_";
}
//show dashes for each letter of movie title?

document.onkeypress = function() {

//link movie array and hint array to show correct hint when computer chooses movie. (Does this go inside or outside of function??)



//Write if statement that checks if the guessed letter is in the movie title 
if {

}

else {
        guesses --;
        lettersGuessed.push(userGuess);
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + lettersGuessed;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;

if (guesses === 0) {
        losses ++;
        alert("You lose! Try again");
        guesses = 12;
        document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guesses;
        lettersGuessed = [];
        document.getElementById("userGuesses").innerHTML = "Letters already guessed: " + lettersGuessed;
        computerChoice = movies[Math.floor(Math.random() * movies.length)];
        console.log(computerChoice);

}

//display movie poster image once user completes word



