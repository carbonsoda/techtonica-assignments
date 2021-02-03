// SOURCE: https://github.com/Techtonica/curriculum/blob/main/javascript/basic-js-practice.md

/* [Challenge 1] - Convert Inches to Meters
Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches. Hint: 1 meter equals 39.3701 inches. 
*/
// Runtime: O(1)
let metersToInches = (numMeters) => numMeters * 39.3701;

/* [Challenge 2] - Loop n Times
Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times. 
*/
// Runtime: O(n)
function loopThrough(n) {
    for (let i = 1; i <= n; i++) {
        console.log("Hello World");
    }
}

/* [Challenge 3] - Number sum
Define a method called calculateSum to calculate the sum all the digits from 0 to an input number. 
*/
// Runtime: O(n)
function calculateSum(n) {
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum += i;
    }
    return totalSum;
}

/* [Challenge 4] - FizzBuzz
Write a function called fizzbuzz that prints each number from 1 to the input on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/
// Runtime: O(n)
// Runs loop n times, each loop sums up to O(1)
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        let message = "";
        message += i % 3 == 0 ? "Fizz" : "";
        message += i % 5 == 0 ? "Buzz" : "";
        console.log(message.length > 0 ? message : i);
    }
}

/* [Challenge 5] Calculate Factorial Number
 */
// Runtime: O(n)
function factorial(n) {
    // 0! == 1
    return n <= 1 ? 1 : n * factorial(n - 1);
}

/* [Challenge 6] Switch Statements
Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
*/
// Runtime: O(n)
// If didn't include toLowerCase(), then O(1)
function sleep_in(weekday, vacation) {
    if (vacation) return true;
    
    switch (weekday.toLowerCase()) {
        case "saturday":
        case "sunday":
            return true;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return false;
        default:
            return "Invalid weekday";
    }
}

/* [Challenge 7] Accessing Arrays
Write a function called common(a, b) with these criteria: 
Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more. 
*/
// Runtime: O(1)
// Accessing specific indexes in the array
function common(a, b) {
    return a[0] == b[0] || a[a.length - 1] == b[b.length - 1];
}

/* [Challenge 8] Object Keys and Values
1. Create an object with two key-value pairs.
2. Log that object to the console.
3. Delete the first key-value pair in the object.
4. Log that object to the console again. The first key-value pair should be gone.
*/
// Runtime: O(1)
let groceries = {
    store: "the market",
    needs: ["milk", "bread", "eggs"],
};
console.log(groceries);
delete groceries.store;
console.log(groceries);

/* [Challenge 9] Mutating Objects
1. Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.
2. Create a function that accepts the array of objects as an argument.
3. Print the value of the second key in each object to the console. Use dot-notation to access the values.
4. After printing the values in step 3, change the values of the second key in every object to something new.
5. Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.
*/
// Runtime: O(n)
// The for loop runs n times, each loop is O(1) because direct lookups
function mutateObjs(arr) {
    for (let obj of arr) {
        console.log(obj.color);
        obj.color = "blue";
        console.log(obj["color"]);
    }
}

let friendsArr = [
    { name: "Alyssa", color: "black", treat: "reeses" },
    { name: "Jade", color: "green", treat: "cookies" },
    { name: "Bean", color: "pink", treat: "boba" },
];

mutateObjs(friendsArr);
console.log(friendsArr);

/* [Challenge 10] Determine Runtime Complexity
At the top your document for each challenge, state the runtime complexity for that function.
*/
