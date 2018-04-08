/*
.forEach takes a callback function, that callback function is expected to have at least 1, but up to 3, arguments. This is how .forEach was designed.

The arguments are in a specific order:
- The first one represents each element in the array (per loop iteration) that .forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

You have a couple options when calling .forEach on an array:

You can pass in an anonymous function: */

[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
}); 
// 1 (first loop/element) 0 (index number) [1, 2, 3] (the array contents)

// 1 0 [1, 2, 3]
// 2 1 [1, 2, 3]
// 3 2 [1, 2, 3]

/*Or you can pass in a pre-written, named function.*/

function logNums(el, i, arr) {
  console.log(el, i, arr);
}
 
[1,2,3].forEach(logNums);

/*Notice how in the second example we don't invoke logNums when passing it into .forEach? We simply pass in the function name. We don't need to invoke the logNums function, .forEach does that for us. In fact, it invokes the function multiple times, once for every element inside of the array.
*/

/******************     FOR LOOP        *****************/

/*To loop over an array using a for loop, we need to make use of the arrays LENGTH property*/

//create a array and assign it to a variable
var colours = ["red", "yellow", "green", "blue"];

//create for loop and assign [i] variable to colour.length
//link [i] to colours and print the output
for (var i = 0; i < colours.length; i++) {
    console.log(colours[i]);
    alert(colours[i]);
}

//without for loop you would need to print colours individually
console.log(colours[0]); // "red"
console.log(colours[1]); // "yellow"


/******************     FOR EACH        *****************/

//take the [array] and assign .forEach - then pass in a (function(){});
/*    array.forEach(function(){});    */

// .forEach targets every single index in the array

var colours = ["red", "yellow", "green", "blue"];

colours.forEach(function(colour){
    //colour is a placeholder and be called anything you want
    console.log(colour);
});


/******************     FOR VS. FOR EACH        *****************/

//the following code snippets do the same thing:

//with a forEach

var colours = ["red", "yellow", "green", "blue"];

colours.forEach(function(color){
    console.log(color);
});

//with a for loop

var colours = ["red", "yellow", "green", "blue"];

for (var i = 0; i < colours.length; i++){
    console.log(colours[i]);
}


/******************     EXERCISE        *****************/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "yellow", "green", "blue"];

numbers.forEach(function(color){
    if(color % 3 === 0){
        console.log(color);
    }
}); // 3, 6, 9


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 1; i < numbers.length; i++){
    if (i % 3 === 0) {
        console.log(i);
    }
}// 3, 6, 9











