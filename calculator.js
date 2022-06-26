// Simple JavaScript Calculator
// take the operator input
const operator = prompt('Enter operator: (+, -, * or / ): ');


const no1 = prompt('Enter first number: ');
const no2 = prompt('Enter second number: ');

let result;


if (operator == '+') {
    result = no1 + no2;
}
else if (operator == '-') {
    result = no1 - no2;
}
else if (operator == '*') {
    result = no1 * no2;
}
else {
    result = no1 / no2;
}


console.log(result);
