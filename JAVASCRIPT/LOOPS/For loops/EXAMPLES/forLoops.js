//NUMBERS

// Print numbers from 1-5

for (var i = 0; i < 6; i++) {
    console.log(i);
}

//Print out numbers in increments

for (var i = 0; i < 16; i += 8) {
    console.log(i);
}


//STRINGS

//Print each character in a string

var str = "hello";

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//Print out a string in increments

var str = "haenlhlfor";

for (var i = 1; i < str.length; i += 2) {
    console.log(str[i]);
}


//NUMBER EXERCISES

//Print all numbers between -10 and 19
for (var i = -10; i < 20; i++) {
    console.log(i);
}

//Print all even numbers between 10 and 40    
for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Print all odd number between 300 and 333
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
for (var i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
