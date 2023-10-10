const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	array.reduce((total, current) => {return total + current}, 0)
        
    };

const multiply = function(array) {
    return array.reduce((product, current) => {
        product * current
    })

};

const power = function(a,b) {
    return Math.pow(a,b);
	
};

const factorial = function(num) {
    if (num === 0) return 1;
    let result = 1;
	while (num > 1){
        result = result * num
        num --
    }
    console.log(result);
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
