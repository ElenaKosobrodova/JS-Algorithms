// Find the length of the longest substring with unique characters.

function findLongestSubstring(str) {
  let len = 0;
  let start = 0;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    len = Math.max(len, i - start + 1);
    obj[char] = i + 1;
  }
  return len;
}