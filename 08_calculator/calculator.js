const add = function(x, y) {
	let a = x + y;
  return a;
};

const subtract = function(x, y) {
	let a = x - y;
  return a;
};

const sum = function(array) {
  /*let myArr = array;
  let inital = 0;
  
  for (i = myArr.length; i >= 0; i--) {
    let firstNum = myArr.shift();
    sum += firstNum;
    return sum;
  }*/
  
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((a,b) => a*b);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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
