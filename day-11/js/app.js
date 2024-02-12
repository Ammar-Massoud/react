// let div = document.getElementsByTagName("div")[0];
// console.log(div.children[0], div.children[1], div.children[2]);

let inp1 = document.getElementById("num1");
let inp2 = document.getElementById("num2");
let btn = document.getElementById("sum");

let sumArray = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
	return sum;
};

btn.addEventListener("click", (event) => {});
