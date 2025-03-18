//Array
console.log("Intoduction Array");
let numarray=[1,2,3,4]
for(let i=0;i<4;i++){
	console.log(numarray[i]);
}

let namearray=['saman','nimal']
console.log(namearray);

//forEach array
console.log("Array forEach");
numarray.forEach((n)=>{
	console.log(n)
})

console.log("find the maximum value ");
//find the max value of array using foreach
let max=0;
numarray.forEach((n)=>{
	/* if(max<n){
		max=n
	} */
	//(max<n)?max=n:n=n
	(max<n)&&(max=n)
})
console.log("max is: "+max)


//print the nested array
console.log("Nested Array ");
//[[1,2,30],[5,6],[8,5,3]]

let num=[[1,2,30],[5,6],[8,5,3]]
num.forEach((n)=>{
	console.log(n)
})

//get the array value one by one
console.log("Nested Array print value one by one: ");
num.forEach((n)=>{
	n.forEach((i)=>{
	  console.log(i)
    })
})