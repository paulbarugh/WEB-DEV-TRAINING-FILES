/*Chrome browser behaves a little strangely when using alert, prompt, or confirm functions. It doesn't display the HTML on the page until after the popup has been closed. This is problematic since our HTML contains instructions for the user to be able to use the app we're building.

You can avoid this by wrapping your JS code in the following setTimeout function:


window.setTimeout(function() {
  // put all of your JS code from the lecture here
}, 500);


This gives the HTML a half second to load before running the JS, which circumvents the issue of the prompt function blocking the HTML from loading right away.

This is not something you would have to deal with in the real world as prompt, alert, and confirm functions are almost never used and when they are it's typically not on page load.

You'll also learn jQuery in latter sections which has a cool $('document').ready()  function that you could use in place of the window.setTimeout workaround mentioned above.

Note, if you want to be able to access the todos variable from the chrome developer console then you'll need to put it in the global scope, see example below:


var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
}, 500);


If you include the todos array inside of the window.setTimeout() function then it's scope will be local to the anonymous function (callback) and you won't be able to access it from the chrome console.*/


/*window.setTimeout(function () {

    var todos = ["first todo"];

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        //handle input
        if (input === "list") {
            console.log("********");
            todos.forEach(function (list, i) {
                console.log(i + ": " + list);
            });
            console.log("********");
        } else if (input === "new") {
            //ask for a new todos
            var newTodo = prompt("enter a new todo");
            //add todos to the array
            todos.push(newTodo);
            console.log("New todo added")
        } else if (input === "delete") {
            //ask for index of todo to be deleted
            var index = prompt("Please provide index number");
            //delete todo
            todos.splice(index, 1);
            console.log("todo deleted")
        }

        //ask again for a new input
        input = prompt("what would you like to do?");
    }
    console.log("OK you quit the app")

}, 500);*/




//************      REFACTORED CODE        *************//


window.setTimeout(function () {

    var todos = ["first todo"];

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        //handle input
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        //ask again for a new input
        input = prompt("what would you like to do?");
    }
    console.log("OK you quit the app");

    function listTodos() {
        console.log("********");
        todos.forEach(function (list, i) {
            console.log(i + ": " + list);
        });
        console.log("********");
    }

    function addTodo() {
        //ask for a new todos
        var newTodo = prompt("enter a new todo");
        //add todos to the array
        todos.push(newTodo);
        console.log("New todo added");
    }

    function deleteTodo() {
        //ask for index of todo to be deleted
        var index = prompt("Please provide index number");
        //delete todo
        todos.splice(index, 1);
        console.log("todo deleted");
    }

}, 500);
