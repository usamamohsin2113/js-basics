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