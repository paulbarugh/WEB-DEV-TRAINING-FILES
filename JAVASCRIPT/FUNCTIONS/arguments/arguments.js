//This function prints the square root of any number inputted.

function square(num) {
  console.log(num * num);
}

//square(10) will print a value of 100.

function area(length, width) {
  console.log(length * width);
}

//area(9,2); = 18


function sayHello(name) {
  console.log("Hello there " + name + "!");
}

//sayHello(Rusty) = "hello there Rusty!"


//***********************************************************//



//to save the output use RETURN instead of console.log()

function square(x) {
  return x * x;
}

//square(4) = 16

var result = square(104);

//The square of 104 is stored in  result, which when called  = 10816



//this function capitalises the first chat in a string:

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris"; //"paris"
var capital = capitalise(city); //"Paris"



//RETURN stops the function if it runs
//this function checks to see whether the input is a number or a string

function capitalise(str) {
  if (typeof str === "number") {
    return "that's not a string!"
    //The function would stop here becuase RETURN is initialising
  }
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}

var city = "paris"; //"paris"
var capital = capitalise(city); //"Paris"

var num = 37;
var capital = capitalise(num); //"that's not a string!"
