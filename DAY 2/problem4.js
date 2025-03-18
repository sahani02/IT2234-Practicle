//array operation
//push and pop
arr3=['a','b','c']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
//a b c d->d c b a
console.log("Reverse the array using push and pop")
arr1=['a','b','c','d']
rev_arr=[]
for(let i=arr1.length;i>0;i--){
	rev_arr.push(arr1.pop());
}
console.log(rev_arr)