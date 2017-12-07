
// var message = "In global";
// console.log("global: message = " + message);

// var a = function () {
// 	var message = "Inside a";
// 	console.log("a: message = " + message);
// 	b();
// }

// var b = function () {
// 	console.log("b: message = " + message);
// }

// a();

// //Object creation
// var company = new Object();
// company.name = "Facebook";
// console.log(company);


// //Arrays
// var array = new Array();
// array[0] = "Hugo";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello "+ name);
// };
// array[3] = {course: "HTML & CSS"};

// console.log(array);
// console.log(array[1]);
// array[2]("Ana");
// array[2](array[3].course);

// var names = ["Hugo", "Raul", "Salvatore"];
// console.log(names);
// var myObj = {
// 	name: "Hugo",
// 	course: "HTML, CSS and JS",
// 	platform: "Coursera"
// };

// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }


//Closures
function makeMultiplier (multiplier) {
	return (
		function (x) {
			return (multiplier * x);
		}
	);
}

var doubleAll = makeMultiplier (2);
console.log (doubleAll(10));


