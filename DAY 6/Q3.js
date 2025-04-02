function maxNumber(num) {
    if (num < 10) {
        throw new Error("Input must have at least two digits");
    }
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
}


console.log(maxNumber(215));  
console.log(maxNumber(1093));
console.log(maxNumber(8754)); 