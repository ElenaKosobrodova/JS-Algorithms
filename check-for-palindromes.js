//palindromes: 2a3*3a2, carac, etc.
//ignore punctuation, spacing and case

function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let a = newStr.length;
  let b = Math.floor(a / 2);
  let c = Math.ceil(a / 2);
  let subStr1 = newStr.slice(0, b);
  let subStr2 = newStr
    .slice(c, a)
    .split("")
    .reverse()
    .join("");
  if (subStr1 == subStr2) {
    return true;
  } else {
    return false;
  }
}
