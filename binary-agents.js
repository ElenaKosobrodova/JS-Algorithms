//Return an English translated sentence of the passed binary string. The binary string is space separated.

function binaryAgent(str) {
  let arr = str
    .split(" ")
    .map((a) => String.fromCharCode(parseInt(a, 2)))
    .join(" ");
  return arr;
}
