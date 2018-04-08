// How to pass functions into other functions

// SET INTERVAL - time when functions are called

function sing(){
    console.log|("twinkle, twinkle...");
    console.log|("little star...");
}

setInterval(sing, 1000); //setInterval(Function, Interval)
clearInterval(2); //clearInterval(how many commands before stop)

//*******************//

setInterval(function(){
            console.log("This is anonymous function");
            console.log("remember me");
            }, 2000);