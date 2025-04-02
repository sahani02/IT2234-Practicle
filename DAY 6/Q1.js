function getMaxPurchase(budget, keyboardPrices, mousePrices) {
    let maxPurchase = -1;

    for (let keyboard of keyboardPrices) {
        for (let mouse of mousePrices) {
            let total = keyboard + mouse;
            if (total <= budget && total > maxPurchase) {
                maxPurchase = total;
            }
        }
    }
    return maxPurchase;
}

console.log("Budget =60");
console.log("keyboard Prices =[40, 50, 60]");
console.log("mouse Prices =[5, 8, 12]");
console.log(getMaxPurchase(60, [40, 50, 60], [5, 8, 12])); // 58

console.log("Budget =10");
console.log("keyboard Prices =[3,1]");
console.log("mouse Prices =[5,2,8]");
console.log(getMaxPurchase(10, [3, 1], [5, 2, 8])); // 9



console.log("Budget =20");
console.log("keyboard Prices =[30,15]");
console.log("mouse Prices =[8,10,6]");

console.log(getMaxPurchase(20, [30, 15], [8, 10, 6])); // -1