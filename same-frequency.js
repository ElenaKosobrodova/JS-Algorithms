//Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    let val = str1[i];
    if (val in counter1) {
      counter1[val] = counter1[val] + 1;
    } else {
      counter1[val] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let val = str2[i];
    if (val in counter2) {
      counter2[val] = counter2[val] + 1;
    } else {
      counter2[val] = 1;
    }
  }

  for (let key in counter1) {
    if (!(key in counter2) || counter1[key] !== counter2[key]) {
      return false;
    } else {
      return true;
    }
  }
}
