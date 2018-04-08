// Arrays are a way of grouping together a bunch of variables as a list

var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Matt";

//These four variables can be condensed into one ahort array

var friends = ["Charlie", "Liz", "David", "Matt"];

//They are indexed by number and can be called by using (variable[number])

console.log(friends[0]); //"Charlie"

console.log(friends[0] + " & " + friends[1]) // "Charlie & Liz"

//Variables inside the array can be called and changed

friends[0] = "Charles"

//You can add to the array by assigning index that doesnt exist

friends[4] = "Anne";



//You can initialise an empty array in two ways:
var friends = [];
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_data = [49, true, "name", null];

//Arrays have a length property
var nums [45, 56, 89, 82];
nums.length // 4

//You can nest multiple arrays inside a single variable

var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["malfoy", "crabbe", "goyle"],
    ["mooney", "wormtail", "prongs"],
];

//You can call a single index within one of the arrays
console.log(friendGroups[2][0]); // "mooney"
