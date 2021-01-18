function max(val1, val2) {
    return val1 > val2 ? val1 : val2;
}

function isLandscape(width, height) {
    return width > height;
}

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    }

    let result = '';

    if (input % 3 === 0) {
        result += 'Fizz';
    }

    if (input % 5 === 0) {
        result += 'Buzz';
    }

    return result || input;
}

function sum(limit) {
    let sum = 0;

    for (let number = 0; number <= limit; number++) {
        if (number % 3 === 0 || number % 5 === 0) {
            sum+=number;
        }
    }

    return sum;
}