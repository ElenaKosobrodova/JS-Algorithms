function factorialize(num) {
  let cnt = 1;
  for (let i = 1; i <= num; i++) {
    cnt *= i;
  }
  return cnt;
}

//recursion

function factorialize(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialize(num - 1);
}
