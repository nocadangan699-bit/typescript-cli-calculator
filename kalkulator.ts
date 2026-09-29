import * as readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function calculate(num1: number, num2: number, operator: string): number | string {
	switch (operator) {
		case '+': return num1 + num2;
		case '-': return num1 - num2;
		case '*': return num1 * num2;
		case '/':
		    if (num2 === 0) return "Error: Division by zero is not allowed";
		    return num1 / num2
	    default: return "Error: Invalid operator";
	}
}

function startCalculator(): void {
	rl.question("Enter The First Number: ", (input1) => {
		rl.question("Enter An Operator (+,-,*,/): ", (operator) => {
			rl.question("Enter The Second Number: ", (input2) => {
				const number1 = parseFloat(input1);
				const number2 = parseFloat(input2);

				if (isNaN(number1) || isNaN(number2)) {
					console.log("Error: inputs must be valid numbers!");
				} else {
					const result = calculate(number1, number2, operator);
					console.log(`\nResult: ${number1} ${operator} ${number2} = ${result}`);
				}

				rl.close();
			});
		});
	});
}

console.log("=== TypeScript CLI Calculator ===\n")
startCalculator();
