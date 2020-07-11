//The function accepts a number n and returns the n-th element in the Fibonaccci sequence.

function fib(num) {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}
