const add = function(lhs, rhs) {
  return lhs + rhs;
};

const subtract = function(lhs, rhs) {
	return lhs - rhs;
};

const sum = function(list) {
	return list.reduce((sum, val) => sum + val, 0)
};

const multiply = function(list) {
  return list.reduce((product, val) => product * val, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	return n > 1 ? n * factorial(n-1) : 1;
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
