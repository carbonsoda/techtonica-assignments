// This is a combination of two lessons: the Jasmine tests + Runtime Complexity (exercise 3)
// https://github.com/Techtonica/curriculum/blob/main/runtime-complexity/runtime3-solving.md

// Q1:
// Find the integer that occurs most frequently in an array
function mostFrequent(arr) {
    let numTrack = {};

    for (let n of arr) {
        if (!n in numTrack) {
            // initialize property
            numTrack.n = 0;
        }
        numTrack.n++;

        if (numTrack.n > (arr.length / 2)) {
            return n;
        }
    }

    let biggest = -1;
    for (let n of numTrack) {
        if (numTrack[n] > biggest) {
            biggest = numTrack[n];
        }
    }
    return biggest;
}

console.log(mostFrequent([1, 4, 5, 4, 2, 2, 4]));

// Q2:
// Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.
function greatestDiff(arr) {
    if (arr.length < 2) return -1;

    // the greatestDiff = biggest - smallest
    let bigNum = arr[0];
    let smallNum = arr[1];

    // doesn't account for absolute difference
    for (let n of arr) {
        if (n > bigNum) {
            bigNum = n;
        } else if (n < smallNum) {
            smallNum = n;
        }
    }

    return bigNum - smallNum;
 }

// Q3:
// Find the only element in an array that only occurs once
function singleOccurrence(arr) { }

// Q4:
// Find the common elements of 2 integer arrays
function commonIntegers(arr1, arr2) { }

// Q5:
// Determine if 2 Strings are anagrams (use the same letters re-arranged)
function anagrams(s1, s2) { }


// Q6:
// Check if a String is composed of all unique characters
// Runtime: O(n)
function uniqueChars(str) {
    // Set has O(1) lookup + insertion
    let uniqueLetters = new Set();
    let letterCount = 0;

    for (let i = 0; i < str.length; i++) {
        uniqueLetters.add(str[i]);
        letterCount++;
        if (uniqueLetters.size != letterCount) {
            return false;
        }
    }

    return true;
}


module.exports = {
    mostFrequent,
    greatestDiff,
    singleOccurrence,
    commonIntegers,
    anagrams,
    uniqueChars
};
