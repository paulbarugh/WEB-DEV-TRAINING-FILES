// Create sectretNumber
var secretNumber = 21;

//ask user for guess
//(Number) converts the string answer into a number
var stringGuess = prompt ("Guess a number");
var guess = Number(stringGuess);

while (guess !== secretNumber) {
if (guess === secretNumber) {
    alert("Congratulations, you got it right!");
}
    else if (guess > secretNumber) {
        alert ("You're too high dumb dumb!");
    }
    else {
        alert ("Too low you mongoloid!");
    }
}

//check guess 
