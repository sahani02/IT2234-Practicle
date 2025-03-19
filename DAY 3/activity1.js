//write a boolean function to find a given number is prime 

let num = 4;
function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
console.log(isPrime(num) ? "The num is a prime" : "The num is not a prime");
