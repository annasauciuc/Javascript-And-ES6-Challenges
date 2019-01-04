// /* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

// Complete IIFE that will expose following methods:
//   greet() - It will take one argument and return greeting string
//   changeGreeting() - It will change greeting string

// Initial greeting string "Hey, that's" must be defined inside IIFE.
// */

"use strict";


const greeting = (() => {
    let string = "Hey, that's";

    function greet(name) {
        return `${string} ${name}`
    }

    function changeGreeting(newGreeting) {
        string = newGreeting;
    }
    return {
        greet,
        changeGreeting
    };

})();

// Usage:

var singleA = greeting.greet("Bob");
console.log(singleA);
var singleB = greeting.changeGreeting("Good morning from");
var singleD = greeting.greet("george");
console.log(singleD);
// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.