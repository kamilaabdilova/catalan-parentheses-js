function countWellFormedParenthesis(n) {
  if (n < 0) return 0;

  const factorial = (x) => {
    let res = 1;
    for (let i = 2; i <= x; i++) res *= i;
    return res;
  };

return Math.round(factorial(2 * n) / (factorial(n + 1) * factorial(n)));}

module.exports = { countWellFormedParenthesis };