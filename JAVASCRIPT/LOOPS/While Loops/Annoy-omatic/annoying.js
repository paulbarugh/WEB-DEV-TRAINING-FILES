// VERSION 1
//will only run once

//var answer = prompt ("are we there yet?");
//
//if (answer === "yes") {
//    alert("yay, we made it!");
//} else {
//    var answer = prompt("are we there yet?");
//}

//var answer = prompt ("are we there yet?");
//
//while (answer !== "yes" && answer !== "yeah") {
//    var answer = prompt ("are we there yet?");
//}
//alert ("Yeah, we made it!");


//VERSION 2
// A user can enter any string as long as it contains "yes" in it.

var answer = prompt ("are we there yet?");

while (answer.indexOf("yes") == -1 && answer.indexOf("yeah") == -1) {
    var answer = prompt ("are we there yet?");
}
alert ("Yeah, we made it!");

