/*let secret = 0;
window.onload = function () {
	let secret = Math.floor(Math.random() * 100 + 1);
	console.log("Secret number is: "+secret);
}*/

let output = document.getElementById("answer");
console.log(output);

let secret = Math.floor(Math.random() * 100 + 1);
console.log("Secret number is: "+secret);

function guessNumber() {
	//console.log("Secret number in guessNumber function: "+secret);
	
	let result = document.getElementById("inputNumber").value;
	if (result >=1 & result <=100)  {
		if (result == secret) {
			console.log("You win the game. Wooohooo congrats!");
			output.textContent = "You win the game. Wooohooo congrats!";
			console.log("output.innerText: "+output.innerText);
			//return;
		}
		else if (result < secret) {
			console.log("You need to choose larger number ;)");
			output.textContent = "You need to choose larger number ;)";
			//return;
		}
		else if (result > secret){
			console.log("You need to choose smaller number ;)");
			output.textContent = "You need to choose smaller number ;)";
			//return;
		}
	} else {
		console.log("Number has to be between 1 and 100!!!");
	}

}//end of function guessNumber()


