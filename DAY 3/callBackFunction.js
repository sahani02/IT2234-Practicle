//callback function-//use web services

//Print some massege using callback function
console.log("Print some massege using callback function")
const greet=(msg,fun)=>{
	console.log("Hi.. "+msg)
	fun()
}
greet("Good morning",()=>{console.log("My name is David")})

//Print number set multiply by 2 using callback function
console.log("Print number set multiply by 2 using callback function")
const multwo=(n)=>n*2
const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)