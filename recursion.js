// - Compute the sum of natural numbers upto N;
// - Compute factorial!
// - Find power of number
// - Find Taylor Series upto eX terms
// - Find Fib Series
// - Find Combination nCr using recursion
// - Solve the puzzle of tower of honai
// - Given an array of strings, capitalize the first letter of each string in the array.
// - Reverse the string
// - Find maximum number in the array
// - Check if string is Palindrome
// - Write a recursive function called someRecursive which accepts an array and a callback.
//   The function returns true if a single value in the array returns true when passed to the callback.
//   Otherwise it returns false.
// - Flatten the array.
// - NestedEvenSum: Write a recursive function called nestedEvenSum. Return the sum of all even numbers
//   in an object which may contain nested objects.
// - Given an array of words, return a new array containing each word capitalized
// - Write a function called stringifyNumbers which takes in an object and
//   finds all of the values which are numbers and converts them to strings
// - Write a function called collectStrings which accepts an object and
//   returns an array of all the values in the object that have a typeof string
// - Find first index of number
// - Find last index of given number
// - Get All index of array against a given number
// - Remove char from string 
// - Return distinct characters (remove duplicates)
// - Return all subsequence in a string
// - Return keypad patterns against a given number
// - Find permuation of given string! 
// ---------------------------------------------------------------------------------------

// - Compute the sum of natural numbers upto N;
function sumOfNaturalNumbers(limit) {
    if (limit <= 0) {
        return 0;
    }

    return limit + sumOfNaturalNumbers(limit - 1);
}

// - Compute factorial!
function factorial(number) {
    if (number <= 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

// - Find power of number
function powerOfNumber(number, exponent) {
    if (exponent <= 0) {
        return 1;
    }

    return number * powerOfNumber(number, exponent - 1);
}

// - Flatten the array.
function flattenArray(arr) {
    if (Array.isArray(arr)) {
        let result = [];
        arr.forEach(v => {
            if (Array.isArray(v)) {
                result.concat(flattenArray(v));
            }
            else{
                result.push(v);
            }
        });

        return result;
    }
}

// - Find Fib Series
function fibonacciSeries(upperLimit) {

}

