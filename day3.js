// let reachedTheEnd = false;
// let end = 5;
// let begin = 0;
// while (!reachedTheEnd) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// 	if (begin == end) {
// 		reachedTheEnd = true;
// 	}
// }

// console.log("Finally");

// let end = 5;
// let begin = 0;
// while (begin <= end) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// }

// console.log("Finally");

// let end = 5;
// let begin = 0;
// while (true) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// 	if (begin == end) {
// 		break;
// 	}
// 	console.log("HERE");
// }

// console.log("Finally");

// let end = 5;
// let begin;
// for (begin = 0; begin <= end; ) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// }
// console.log(begin);
// console.log("Finally");

// while (begin <= end) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// }

let num = 15;
let str = "";

// while (num > 0) {
// 	if (num % 5 == 0 || num % 3 == 0) {
// 		if (num % 3 == 0) {
// 			str += "Fizz";
// 		}
// 		if (num % 5 == 0) {
// 			str += "Buzz";
// 		}
// 		console.log(str);
// 		str = "";
// 		num -= 1;
// 		continue;
// 	}
// 	console.log(num);
// 	num -= 1;
// }

// while (num > 0) {
// 	if (num % 3 == 0) {
// 		str += "Fizz";
// 	}
// 	if (num % 5 == 0) {
// 		str += "Buzz";
// 	}
// 	if (str == "") {
// 		console.log(num);
// 		num -= 1;
// 		continue;
// 	}
// 	console.log(str);
// 	str = "";
// 	num -= 1;
// }

function area(radius) {
	console.log(Math.PI * radius * radius);
}

function areaReturn(radius) {
	return Math.PI * radius * radius;
}

function fizzBuz(min, max) {
	let str = "";

	while (max > min) {
		if (max % 5 == 0 || max % 3 == 0) {
			if (max % 3 == 0) {
				str += "Fizz";
			}
			if (max % 5 == 0) {
				str += "Buzz";
			}
			console.log(str);
			str = "";
			max -= 1;
			continue;
		}
		console.log(max);
		max -= 1;
	}
}

// function factorial(num) {
// 	let hamada = 1;
// 	while (num > 0) {
// 		hamada *= num;
// 		num -= 1;
// 	}
// 	console.log(hamada);
// }

// function hamada(arr) {
// 	if (arr.length == 1) {
// 		return arr[0];
// 	} else {
// 		let lastElement = arr.pop();
// 		return lastElement + hamada(arr);
// 	}
// }

// fizzBuz(20, 30);
// factorial(10);

// identical
// row += 1
// row++

// row = 0
// 0 +++row

function stupidPyramid() {
	let height = 10;
	for (let row = 0; row < height; row++) {
		let str = "";
		for (let col = height; col > 0; col--) {
			if (col > row) {
				str += " ";
			} else {
				str += "*";
			}
		}
		console.log(str);
	}
}

function pyramid(height) {
	for (let row = 0; row < height; row++) {
		let str = "";
		str += " ".repeat(height - row - 1);
		str += "*".repeat(row + 1);
		console.log(str);
	}
}

// pyramid(5);
// pyramid(10);
// pyramid(15);

// function guessFourNumber(sum) {
// 	let a = 0;
// 	let b = 0;
// 	let c = 0;
// 	let d = 0;
// 	for (a = 0; a < sum; a++) {
// 		for (b = 0; b < sum; b++) {
// 			for (c = 0; c < sum; c++) {
// 				d = sum - (a + b + c);
// 				if (a + b + c + d == sum) {
// 					console.log(a, b, c, d);
// 				}
// 			}
// 		}
// 	}
// }

// guessFourNumber(100);
// console.log("****************************************************");
// guessFourNumber(50);
// console.log("****************************************************");
// guessFourNumber(25);

// let arr = ["ahmed", "alaa", "morsy", "maary"];

// for (let x = 0; x < arr.length; x++) {
// 	console.log(arr[x]);
// }

// for (let item of arr) {
// 	console.log("loop over values: ", item);
// }

// for (let key in arr) {
// 	console.log(arr.length - key - 1);
// }

// console.log(arr.length - 1);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr);

// let person = {
// 	name: "Ali",
// 	age: 25,
// 	hobbies: ["swimming", "wreslting"],
// 	friends: {
// 		omar: {
// 			name: "Omar Ibrahim",
// 			age: 30,
// 			hobbies: ["swimming", "wreslting"],
// 		},
// 	},
// };

// console.log(person["friends"]["omar"]["name"]);
// console.log(person["hobbies"][1]);

let arr = [5, -2, 3, 4, 10];

let op = {
	array1: [5, 9, 10, -1, -15],
	array2: [4, 5, 2, -20],
	array3: [5, 9, -10, -15, 29],
};

// let sum = 0;
// for (let number of arr) {
// 	sum += number;
// }
// console.log(sum);

// function sumision(arr) {
// 	let sum = 0;
// 	for (let number of arr) {
// 		sum += number;
// 	}
// 	return sum;
// }

// function sumObjectArrays(obj) {
// 	let sumOfAllObjs = 0;
// 	for (let key in op) {
// 		sumOfAllObjs += sumision(op[key]);
// 	}
// 	console.log("Summision of all object", sumOfAllObjs);
// }

// sumObjectArrays(op);

// let sumOfAllObjs = 0;
// for (let key in op) {
// 	for (let number of op[key]) {
// 		sumOfAllObjs += number;
// 	}
// }
// console.log(sumOfAllObjs);

// function sumRec(arr) {
// 	if (arr.length == 0) return 0;
// 	else if (arr.length == 1) return arr[0];
// 	else {
// 		let lastElement = arr.pop();
// 		return lastElement + sumRec(arr);
// 	}
// }

// console.log(sumRec([2, 1, 4, 3, 8]));

// function fib(leno) {
// 	if (leno <= 0) return [0];
// 	else if (leno == 1) return [0, 1];
// 	let arr = fib(leno - 1);
// 	let len = arr.length;
// 	arr.push(arr[len - 1] + arr[len - 2]);
// 	return arr;
// }

// console.log(fib(9));
