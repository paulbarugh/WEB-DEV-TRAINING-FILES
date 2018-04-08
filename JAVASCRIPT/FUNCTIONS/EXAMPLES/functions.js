//Functions are packets of code that need to be called before they run.

function sayHi() {
    console.log("Hello World!");
}

// sayHi(); will run the function.


//***       isEven          ***//
//This function returns true or false depanding on the number being odd or even.

/*function isEven(num) {
    if (num % 2 !== 0) {
        return "false";
    } else {
        return "true";
    }
}*/

function isEven(num){
    return num % 2 === 0; //num % 2 === 0 is a boolean statement and will return true/false
}

//Function that returns a factorial of any given number
//factorial(4) = 4 x 3 x 2 x 1

function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        num *= i; // num = num x i (left side must be a variable)
    }
    return result;
}


//Take a string and replaces certain characters

function kebabToSnake(str){
    //replace characters in a string
    var newstr = str.replace(/-/g, '_');
    //return str
    return newstr;
}

