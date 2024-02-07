let num1 = 5;
let num2 = 0;

// if (/* Conition that evalute to true or false */) {
//   /**
//    * Code to be excuted if condition is true
//    */
// } else {
// 		/**
//  	* Code to be Excuted if condition is false
//  	*/
// }

if (num2 > num1) {
	let num3 = 50;
	console.log("*******************************************");
	console.log("inside if condition");
	console.log("*******************************************");
} else {
	console.log("From else");
}

let grade = 65;
if (grade >= 0 && grade < 50) {
	console.log("Failed");
} else if (grade >= 50 && grade < 65) {
	console.log("Accepted");
} else if (grade >= 65 && grade < 75) {
	console.log("Good");
} else if (grade >= 75 && grade < 85) {
	console.log("Very Good");
} else if (grade >= 85 && grade <= 100) {
	console.log("Excellent");
}
