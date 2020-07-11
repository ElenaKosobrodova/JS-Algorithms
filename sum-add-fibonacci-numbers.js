function sumFibs(num) {
  let fib = [1, 1];
  let i = 2;
  do {
    fib[i] = fib[i - 2] + fib[i - 1];
    i++;
  } while (fib[fib.length - 1] < num);
  let result = fib
    .filter((a) => a <= num && a % 2 !== 0)
    .reduce((b, c) => b + c);
  return result;
}
