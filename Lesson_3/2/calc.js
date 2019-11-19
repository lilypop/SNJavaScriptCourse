//let num1 = 10;
//let num2 = 20;

function calc (a,b, operator) {
	let div = "/";
	let multi = "*";
	let plus = "+";
	let minus = "-";

	if (operator === div) {
		console.log(a/b);
	}
	else if (operator === multi) {
		console.log(a*b);
	}
	else if (operator === plus) {
		console.log(a+b);
	}
	else if (operator === minus) {
		console.log(a-b);
	}
}

calc(10, 20, "+");