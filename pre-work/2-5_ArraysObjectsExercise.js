// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.


// Exercise 1. Make an empty array named animals
let animals = [];

// Exercise 2. Add the string "frog" to the array
animals.push("frog");

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("monkey", "cat", "tiger", "duck");

// Exercise 4. Update the first item in the array to be "gorilla"
animals[0] = "gorilla";

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animals.length);

// Exercise 6. Print the first item in the array
console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(animals[animals.length - 1]);

// Exercise 8. Remove the last item from the array
animals.pop();

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
assortedThings = ["Apples", "dogs", "holiday", 1, 2, 3];

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
for (let i = 0; i < assortedThings.length; i++){
    console.log("Item #" + i + " is " + assortedThings[i]);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array, 
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if 
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.
function checkNums(numArr){
    for(let i = 0; i < numArr.length; i++){
        if (isNaN(numArr[i])) {
            // not a number (or cannot be casted into one)
            // though booleans are mishandled with it
            console.log(numArr[i] + " is not a number!");
        } else if (numArr[i] > 100){
            console.log(numArr[i] + " BIG");
        } else if (numArr[i] >= 0){
            console.log(numArr[i] + " small");
        } else{
            console.log(numArr[i] + " negative");
        } 
    }
}

checkNums([-23, -100, 0, 100, 233, "33", "D"]);

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.
let me = { 
    "name": "Miku",
    "favoriteAnimal": "cat",
    "favoriteNumber": 39
}

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
me.favoriteColor = "teal";
me.favoriteFood = "leek soup";

// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal = "dog";

// Exercise 15. Print the value of favoriteAnimal. 
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(me.favoriteAnimal);
console.log(me["favoriteAnimal"]);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.

/*
For exercise 11
I learned that non-numerical values can still be evaluated in comparisons
Strings vs Strings are compared "lexicographically" -- based on their order in the alphabet
But with numbers vs letters, it always comes out as false
except when comparing with 0, which can be considered null or "" so it makes sense
https://stackoverflow.com/questions/1863028/string-compare-logic

*/



// Email your file to the course staff, 
// or commit your file to GitHub and email us a link.