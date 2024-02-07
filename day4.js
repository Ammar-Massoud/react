// let arr = [3, 1, 3, 2, 4, 6, 10, 9, 1];
// let arr = [-15, 1, 2, -10, -1];

// for (let repeat = 0; repeat < arr.length; repeat++) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > arr[i + 1]) {
// 			let ahmed = arr[i];
// 			arr[i] = arr[i + 1];
// 			arr[i + 1] = ahmed;
// 		}
// 	}
// }

// console.log(arr);

let arr = [1, 2, 3, 4, 5];

function sumission(start, end, increasedNumber) {
	let sum = 0;
	console.log(this);
	for (let i = start; i < end; i++) {
		sum += this[i];
	}
	return sum + increasedNumber;
}

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getFullYearOfBirth() {
// 		return 2024 - this.age;
// 	}
// }

// class Doctor extends Person {
// 	constructor(specialty, name, age) {
// 		super(name, age);
// 		this.specialty = specialty;
// 		console.log("Hi, I am doctor " + this.name);
// 	}
// }

class FourSideShape {
	constructor(side1, side2, side3, side4) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.side4 = side4;
	}
	permiter() {
		return this.side1 + this.side2 + this.side3 + this.side4;
	}
}
class Triangle extends FourSideShape {
	static id = 0;
	static name = "TRIANGLE";

	constructor(side1, side2, side3) {
		super(side1, side2, side3, 0);
		Triangle.id++;
	}

	printTrinagle() {
		for (let row = 0; row < this.side2; row++) {
			let str = "";
			str += " ".repeat(this.side2 - row - 1);
			str += "*".repeat(row + 1);
			console.log(str);
		}
	}

	area() {
		return 0.5 * this.side1 * this.side2;
	}
}

// let ammar = new Person("Ammar", 25);
// let ahmed = new Person("ahmed", 25);
// let ali = new Person("ali", 25);

// let person = new Person("Ammar", Number("25"));
// let doctorGeorge = new Doctor("Surgeon", "George", 60);

// console.log("Name:", doctorGeorge.name);
// console.log("age:", doctorGeorge.age);
// console.log("Specialty:", doctorGeorge.specialty);
// console.log("YearOFBirth:", doctorGeorge.getFullYearOfBirth());

// console.log(doctorGeorge);

let tr1 = new Triangle(3, 4, 5);
let tr2 = new Triangle(3, 4, 5);
let tr3 = new Triangle(3, 4, 5);
let tr4 = new Triangle(3, 4, 5);
let tr5 = new Triangle(3, 4, 5);
let tr6 = new Triangle(3, 4, 5);
let tr7 = new Triangle(3, 4, 5);
let tr8 = new Triangle(3, 4, 5);

console.log(Triangle.id);
console.log(Triangle.name);

Triangle.name = "SHAPE";

console.log(tr8.name);
