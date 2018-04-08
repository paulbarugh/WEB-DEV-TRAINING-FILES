//************      PUSH/POP        *************//

// Push and Pop can be used to add or remove items from the back of the array

var colours = ["red", "Yellow", "Pink", "Blue"];


//Push adds item to the end of the array

colours.push("green");
// var colours = ["red", "Yellow", "Pink", "Blue", "Green"];


//pop removes and returns the last item from array

colours.pop();
// var colours = ["Green"];

colours // ["red", "Yellow", "Pink", "Blue"]


//************      SHIFT/UNSHIFT        *************//

// Shift and Unshift can be used to add or remove items from the front of the array

var colours = ["red", "Yellow", "Pink", "Blue"];


//unshift adds item to the front of the array

colours.unshift("green");
// var colours = ["Green", "red", "Yellow", "Pink", "Blue"];


//shift removes and returns the last item from array

var colours = ["Green", "red", "Yellow", "Pink", "Blue"];
colours.shift();
// ["red", "Yellow", "Pink", "Blue"]

var col = colours.shift();
// col = ["Green"];


//************      IndexOf        *************//

//Use IndexOf to find the index of an item in an array

var fruit = ["grape", "banana", "pear", "grape"];

//return the first index at which a iven element can be found
fruit.indexOf("banana"); // 1
fruit.indexOf("grape"); // 0, not 3

//return -1 if the element is not present
fruit.indexOf("apple"); // -1


//************      SLICE        *************//

//USE SLICE() TO COPY PARTS OF AN ARRAY

var fruits = ["banana", "apple", "pear", "grape", "lemon"];

//Use slice to copy the 2nd and 3rd fruits
//specifiy where the new array starts(1) and ends (3)
var selection = fruits.slice(1,3);

//THIS DOES NOT ALTER THE ORIGINAL ARRAY

//You can also use slice to copy the entire array
var newfruit = fruits.slice();



//************      TIPS        *************//

//.length does not start at 0, but instead lists numbers conventiionally
























