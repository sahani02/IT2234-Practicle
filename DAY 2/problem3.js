//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in array
let ar = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let mostFrequent, maxCount = 0;

for (let i = 0; i < ar.length; i++) {
    let count = 0;
    for (let j = 0; j < ar.length; j++) {
        if (ar[i] == ar[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostFrequent = ar[i];
    }
}
console.log("frequent element is: "+mostFrequent); 

