// LCM(a,b)=|ab|/gcd(a,b) , where gcd is the greatest common divisor

function smallestCommons(arr) {
  let bond = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = bond[0]; i <= bond[1]; i++) {
    result.push(i);
  }
  let scm = 0;
  let j = 1;
  let k;
  do {
    scm = result[0] * j * result[1];
    for (let k = 2; k < result.length; k++) {
      if (scm % result[k] !== 0) {
        break;
      }
    }
    j++;
  } while (k < result.length);
  return scm;
}
