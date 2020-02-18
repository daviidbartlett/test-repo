<<<<<<< HEAD
const divideNum = (a, b) => {
  return a / b;
=======
const divideNum = function(num, divisor) {
  //this is how you protect against mutation right
  const num2 = num;
  const divisor2 = divisor;
  return num2 / divisor2;
>>>>>>> 434d63b3a64671f6feea1e7683cbe6db1e7537b3
};
