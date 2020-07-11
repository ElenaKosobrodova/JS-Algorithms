function sumPrimes(num) {
  let arr = [];
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    arr.push(i);
  }
  for (let j = 2; j <= num; j++) {
    arr = arr.filter((a) => a % j !== 0 || a === j);
  }
  sum = arr.reduce((b, c) => b + c);
  return sum;
}
