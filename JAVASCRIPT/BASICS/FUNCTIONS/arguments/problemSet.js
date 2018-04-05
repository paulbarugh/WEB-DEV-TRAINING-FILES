//This function returns true or false depanding on the number being odd or even.

function isEven(num){
  if(num % 2 !== 0) {
   return "false";
 }else{
   return "true";
 }
}

//Function that returns a factorial of any given number

function factorial(num) {
  if (num === 1)
    return 1;
  if (num === 0)
    return 0;
  for (var i = num - 1; i >= 1; i--) {
    num *= i; // num = num x i (left side must be a variable)
  }
  return num;
}


//Function that replaces certain character with other characters

function kebabToSnake(str) {
    for (var i = 0; i < str.length; i++)
}


var count = 0;

while (count < str.length) {
    console.log(str[count]);
    count++;
}
