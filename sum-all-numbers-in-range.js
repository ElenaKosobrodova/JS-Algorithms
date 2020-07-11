function sumAll(arr) {
  let arr1 = [...arr];
  arr1.sort((a, b) => a - b);
  let delta = arr1[1] - arr1[0] + 1;
  let sum = 0;
  let num = 1;
  do {
    sum += num;
    num++;
  } while (num < delta);
  sum = +arr1[0] * delta;
  return sum;
}
