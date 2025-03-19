//Arrow function
console.log("Print Hello JS using Arrow function")
const msg=()=>{console.log("Hello JS")}
//console.log(msg)
msg()

//write an arrow function to sum 2 numbers
console.log("Print sum of two numbers using Arrow function")
const add=(num1,num2)=>{return num1+num2}
console.log(add(6,4))

//mulitiply
console.log("Print multipy of two numbers using Arrow function")
const mult=(num1,num2=2)=>{return num1*num2}
console.log(mult(4,5))
console.log(mult(4))

//sum of number set
console.log("Print sum of number set using Arrow function-method 1")
const mysum=(...n)=>{console.log(n)}
mysum(4,5,6,89,2)

const sumofNum=(...n)=>{
	let sum=0
	n.forEach((i)=>{
	  sum+=i
	})
	console.log(sum)
	}
sumofNum(4,5,6,89,2)

console.log("Print sum of number set using Arrow function-method 2")
const numReduce=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
	}
console.log(numReduce(4,5,6,8,2))

