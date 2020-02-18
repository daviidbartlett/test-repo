const divideNum = function(num, divisor) {
  //this is how you protect against mutation right
  const num2 = num;
  const divisor2 = divisor;
  return num2 / divisor2;
};

exports = { divideNum };
