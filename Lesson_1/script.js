let number = 10000;

for (let i=0; i<=number; i++) {
	//console.log(i+1);
	if ((i % 5 === 0) && (i % 3 === 0)) { 
		console.log(i+" "+"FizzBuzz");
	}
	else if (i % 3 === 0) { 
		console.log(i+" "+"Fizz");
	}
	else if (i % 5 === 0) { 
		console.log(i+" "+"Buzz");
	}
	else {
		console.log(i);
	}
} 
