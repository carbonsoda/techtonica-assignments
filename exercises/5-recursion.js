// https://github.com/Techtonica/curriculum/blob/main/recursion/recursion.md#independent-practice


// Palindrome
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else {
        if (str[0] != str[str.length - 1]) {
            return false;
        } else {
            return isPalindrome(str.substring(1, str.length - 1));
        }
    }
}


// Factorial
function factorial(n) {
    if (n == 0) {
        // 0! = 1
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// Fibonacci
// calculates the nth Fibonacci number (starting from n = 1)
// Formula for nth number = F(n-1) + F(n-2)
function fib(n) {
    // consider handling neg numbers too
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}



// GCD - Greatest Common Denominator 
function gcd(x, y) {
    if (y == 0) {
        return x;
    } else {
        return gcd(y, x % y);
    }
}



// Tree Operations (Optional Additional Practice)
// To come back to


