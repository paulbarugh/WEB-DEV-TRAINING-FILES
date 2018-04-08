//Scopes is the context that code is executed in.

function doMath(){
    var x = 40;
    console.log(x);
} // doMath(); = (40) - yet x is undefined outside of the function

var x = 40;

function doMoreMath(){
    console.log(x);
} // x = 40 OUTSIDE of the function and can ALSO be called WITHIN the function

var y = 40;

function doMoreMath(){
    y = 50;
    console.log(y);
} // y = 50 GLOBALLY as the function changed origianl global value

var speak = "words";

function speakWords(){
    var speak = "more words";
    console.log(speak);
} // speak = "words" globally and "more words" inside the function because a new variable was created inside the function.


var num = 8;
function doMath(){
    num += 1;
    if (num % 5 === 0){
        return true;
        }else {
            return false;
        }
}

num += 1;
doMath();
/* num = 8 and then gets +1 before the function is called so now num =9
num then get +1 inside the function so num =10 and reutn value is true */


function hi(){
    var name = "Paul";
    console.log(name);
} // hi(); = "Paul"

function bye(){
    console.log(name);
} // bye - undefined. This is because functions do not share scopes