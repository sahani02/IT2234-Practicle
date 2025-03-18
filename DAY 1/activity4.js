//4. reverse the numbers in left and right 4321-5-9876
let str = "4321-5-9876";
let left = "", middle = "", right = "";
let dash = 0;

for(let i = 0; i < str.length; i++){
	if(str[i] == "-"){
		dash++;
	}
	else if(dash == 0){
		left = str[i] +left;
	}
	else if(dash == 1){
		middle = str[i];
	}
	else{
		right = str[i] + right;
	}
}

let result = left + "-" + middle + "-" + right;
console.log(result);  
