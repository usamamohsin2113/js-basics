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
            sum += number;
        }
    }

    return sum;
}

function calculateGrade(marks) {
    const avg = marks.reduce((a, b) => a + b) / marks.length;

    if (avg >= 90) {
        return 'A';
    }
    if (avg >= 80) {
        return 'B';
    }
    if (avg >= 70) {
        return 'C';
    }
    if (avg >= 60) {
        return 'D';
    }

    return 'F';
}

function showStars(stars) {
    for (let row = 0; row < stars; row++) {
        let pattern = '';

        for (let col = 0; col <= row; col++) {
            pattern += '*';
        }

        console.log(pattern);
    }
}

function isPrime(number) {
    if (number === 1) {
        return true;
    }

    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function showPrimes(limit) {
    for (let num = 0; num <= limit; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

const address = {
    street: '3',
    city: 'Lahore',
    zipCode: 50100
};

function showAddress(address) {
    for (const key in address) {
        console.log(key, address[key]);
    }
}

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Address(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}