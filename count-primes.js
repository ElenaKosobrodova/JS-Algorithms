var countPrimes = function (n) {
  if (n < 2) {
    return 0;
  }
  let arr = [];
  for (let i = 2; i < n; i++) {
    arr[i] = true;
  }
  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) continue;
    for (let j = i * i; j < n; j += i) {
      arr[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      count++;
    }
  }
  return count;
};
