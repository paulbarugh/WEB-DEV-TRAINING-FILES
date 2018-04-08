var under18 = "Sorry, you can't enter the venue";
var between1821 = "You can enter, but you cannot drink";
var otherwise = "You can enter and have a drink";

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

if (age === undefined) {
  alert(Error);

}
if (age < 18) {
  alert(under18);
} else if (age < 21) {
  alert(between1821);
} else if (age === 21) {
  console.log("Happy Birthday!");
} else {
  alert(otherwise);
}


// If age is negative
if (age < 0) {
  alert("Come back once you're out of the womb");
}

// If age is 21
if (age === 21) {
  alert("Happy 21st Birthday!");
}

// If age is odd
// Age divided by two - if it doesn't have a remainder of zero
//(not evenly divisible by two)
if (age % 2 !== 0) {
  alert("Your age is odd!");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
}
