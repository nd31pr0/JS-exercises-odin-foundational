const sumAll = function(min,max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
};

module.exports = sumAll;
