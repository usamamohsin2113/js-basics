// - Compute the sum of natural numbers upto N;
// - Compute factorial!
// - Find power of number
// - Find Taylor Series upto eX terms
// - Find Fib Series
// - Find Combination nCr using recursion

// - Flatten the array. [1,[2,[3,4,[1,2,[1]],2],[2,3]]] = [1,2,3,4,1,2,1,2,2,3]
// - Find maximum number in the array
// - Find first index of number
// - Find last index of given number
// - Get All index of array against a given number

// - Reverse the string "Usama Mohsin" = "nishoM amasU"
// - Given an array of words, return a new array containing each word capitalized
// - Given an array of strings, capitalize the first letter of each string in the array.
// - Check if string is Palindrome
// - Find permuation of given string! 
// - Return all subsequence in a string
// - Return distinct characters (remove duplicates)
// - Remove char from string 

// - Solve the puzzle of tower of honai
// - Return keypad patterns against a given number 1->abc 2->cde
// - Write a recursive function called someRecursive which accepts an array and a callback.
//   The function returns true if a single value in the array returns true when passed to the callback.
//   Otherwise it returns false.
// - NestedEvenSum: Write a recursive function called nestedEvenSum. Return the sum of all even numbers
//   in an object which may contain nested objects.
// - Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings
// - Write a function called collectStrings which accepts an object and
//   returns an array of all the values in the object that have a typeof string
// ---------------------------------------------------------------------------------------

// - Compute the sum of natural numbers upto N;
function sumOfNaturalNumbers(limit) {
    return limit <= 0 ? 0 : limit + sumOfNaturalNumbers(limit - 1);
}

// - Compute factorial!
function factorial(number) {
    return number <= 1 ? 1 : number * factorial(number - 1);
}

// - Find power of number
function powerOfNumber(number, exponent) {
    if (exponent <= 0) {
        return 1;
    }

    if (exponent % 2 == 0) {
        let result = powerOfNumber(number, exponent / 2);
        return result * result;
    }

    return number * powerOfNumber(number, exponent - 1);
}

// - Flatten the array. [1,[2,[3,4,[1,2,[1]],2],[2,3]]] = [1,2,3,4,1,2,1,2,2,3]
function flattenArray(arr) {
    let result = [];

    for (const v of arr) {
        if (Array.isArray(v)) {
            result.push(...flattenArray(v));
        }
        else {
            result.push(v);
        }
    }

    return result;
}

// - Reverse the string "Usama Mohsin" = "nishoM amasU"
function reverseString(str) {
    return str.length > 1 ?
        str[str.length - 1] + reverseString(str.substring(0, str.length - 1)) :
        str;
}

// - Find maximum number in the array
function maxNumber(arr) {

    if (arr.length <= 1) {
        return arr.length === 0 ? 0 : arr[0];
    }

    if (arr[0] < arr[1]) {
        arr.shift();
    }
    else {
        arr.splice(1, 1);
    }

    return maxNumber(arr);
}
