const add = function add(num1, num2) {
	return num1 + num2;
};

const subtract = function subtract(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.reduce((total, current) => total * current);
};

const power = function power(base, exponent) {
    return Math.pow(base, exponent);
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
