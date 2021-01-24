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

function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
    const pointLimit = 12;

    let trueSpeed = Math.floor(speed);

    if (trueSpeed < speedLimit + kmPerPoint) {
        console.log("Ok");
    }
    else {
        trueSpeed = Math.round(trueSpeed / kmPerPoint) * kmPerPoint;
        let points = (trueSpeed - speedLimit) / kmPerPoint;

        if (points >= pointLimit) {
            console.log('License Suspended');
        }
        else {
            console.log('Points', points);
        }
    }
}

function showNumbers(limit) {
    for (let index = 0; index <= limit; index++) {
        console.log(index, index % 2 === 0 ? "even" : "odd");
    }
}

function countTruthy(array) {
    let truthies = 0;

    for (let param of array) {
        if (param) {
            truthies++;
        }
    }

    return truthies;
}

function showProperties(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
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

function areEqual(address1, address2) {
    if (Object.keys(address1).length === Object.keys(address2).length) {
        for (const key in address1) {
            if (key in address2) {
                if (address1[key] !== address2[key]) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }

    return false;
}

function areSame(address1, address2) {
    return address1 === address2;
}