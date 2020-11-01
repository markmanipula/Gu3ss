var A = 0;
var B = 0;
var currentGuessCount = 0;

var firstRandom = Math.floor((Math.random() * 9));
var secondRandom = Math.floor((Math.random() * 10));
var thirdRandom = Math.floor((Math.random() * 10));

//this loop prevents number repetition
while (firstRandom === secondRandom || firstRandom === thirdRandom) {
    firstRandom = Math.floor((Math.random() * 10));
}
//first number cant start at 0
if (firstRandom === 0) firstRandom += 1;

while (secondRandom === firstRandom || secondRandom === thirdRandom) {
    secondRandom = Math.floor((Math.random() * 10));
}

while (thirdRandom === firstRandom || thirdRandom === secondRandom) {
    thirdRandom = Math.floor((Math.random() * 10));
}

//this is the output text that is shown for the player
var output = "";

//this function determines if theres a match with the three random numbers that the computer generated 
function submit(num1, num2, num3) {
    var firstNumber = parseInt(document.getElementById("number1").value);
    var secondNumber = parseInt(document.getElementById("number2").value);
    var thirdNumber = parseInt(document.getElementById("number3").value);

    if (firstNumber === firstRandom) A++;
    if (secondNumber === secondRandom) A++;
    if (thirdNumber === thirdRandom) A++;

    if (firstNumber === secondRandom) B++;
    if (firstNumber === thirdRandom) B++;
    if (secondNumber === firstRandom) B++;
    if (secondNumber === thirdRandom) B++;
    if (thirdNumber === firstRandom) B++;
    if (thirdNumber === secondRandom) B++;

    output = A + "A" + B + "B";
    if (A === 0 && B === 0) output = "X";

    //if the player guesses all correct numbers
    if (A === 3) {
        youWon();
    }

    //checks for number between 1-9, 0-9, 0-9
    if (firstNumber === 0) {
        alert("Starting number cannot start at 0");
        currentGuessCount--;
        return;
    }
    else if ((firstNumber < 1 || firstNumber > 9) || (secondNumber < 0 || secondNumber > 9) || (thirdNumber < 0 || thirdNumber > 9)) {
        alert("Input must be between 0-9");
        currentGuessCount--;
        return;
    }
    //checks for input which is NaN
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) || Number.isNaN(thirdNumber)) {
        alert("Please input a number");
        currentGuessCount--;
        return;
    }
    //checks for repeating input
    if ((firstNumber === secondNumber || firstNumber === thirdNumber) || (secondNumber === firstNumber || secondNumber === thirdNumber)) {
        alert("Cannot have repeating numbers");
        currentGuessCount--;
        return;
    }

    output = firstNumber + " ," + secondNumber + ", " + thirdNumber + " is: " + output;

    var outputText = document.createElement("P");
    outputText.innerHTML = output;
    document.getElementById("thisOutput").appendChild(outputText);

    //document.getElementById("output").innerHTML = output;

    A = 0;
    B = 0;

    return false;
}

//the player wins and ask if they want to play again
function youWon() {
    var answer = firstRandom + "," + secondRandom + "," + thirdRandom;
    //adds 1 to the current guess since currentGuessCount is not updated
    currentGuessCount++;
    alert("You got it! The answer is " + answer + " Your number of guesses is " + currentGuessCount);
    var playAgain = confirm("Would you like to play again?");
    if (playAgain === true) location.reload();
}

//function that keeps track of the current guess count
function guessCounter() {
    var guessString = "Current guess count is: ";
    currentGuessCount++;
    document.getElementById("counter").innerHTML = guessString + currentGuessCount;
}

//a function that asks for confirmation if the player wants to give up
function giveUp() {
    var reload = confirm("Are you sure you want to give up?");
    if (reload === true) {
        var answer = firstRandom + "," + secondRandom + "," + thirdRandom;
        alert("The answer is " + answer);
        location.reload();
    }
}


//things to do:
//timer
//style
//make code prettier