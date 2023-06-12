// Generate random numbers within a range (inclusive)

function randomNumbersInRange(min, max) {
    let number = (Math.random() * (max - min + 1) + min);
    return Math.floor(number);
}

console.log(randomNumbersInRange(2, 5));