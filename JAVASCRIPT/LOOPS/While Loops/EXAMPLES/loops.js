//loop will print out each number to equal value of 6
var count = 1;

while (count < 6) {
    console.log("count is: " + count);
    count++;
}

var num = 1;

//loop will add 2 until it reaches 11 ands stops
while (num <= 10) {
    console.log(num);
    num += 2;
}

//loop will print all multiples of 4 until it reaches 20
var num = 1;

while (num <= 20) {
    if (num % 4 === 0) {
        console.log(num);
    }
    num++;
}

//loop will print out each letter in sequence of the string
var str = "hello";

var count = 0;

while (count < str.length) {
    console.log(str[count]);
    count++;
}

//EXERCISES

//print all numbers between -10 and 19

var num = -10;

while (num <= 19) {
    console.log(num);
    num++;
}


//print all even numbers between 10 and 40

var num = 10;

while (num <= 40) {
    console.log(num);
    num += 2;
}

//var num = 10;
//
//while (num <= 40) {
//    if (num % 2 === 0) {
//        console.log(num);
//    }
//    num += 1;
//}

//print all odd numbers between 300 and 333

var num = 300;

while (num <= 333) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

//print all numbers divisible by 5 AND 3 between 5 and 50

var num = 5;

while (num <= 50) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
    num++;
}
