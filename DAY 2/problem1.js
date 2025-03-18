/*a=[4,5,6,3,7]
  b=[8,3,2,1,5]
  find the common element between a and b
  */
let common=[]
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
for(let i=0;i<a.length;i++){
	for(let j=0;j<b.length;j++){
		if(a[i]==b[j]){
			 common.push(a[i])
			 break
	    }
	}
}
console.log("Common num: "+common)
  








