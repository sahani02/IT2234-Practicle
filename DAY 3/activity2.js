//write recursive function to print numbers 1 to n

function printNumbers(n, current = 1) {
    if (current <= n) {  
        console.log(current); 
        printNumbers(n, current + 1); 
    }
}
let n = 10; 
printNumbers(n);