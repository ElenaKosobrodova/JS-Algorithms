var longestCommonPrefix = function (strs) {
  var result = "";
  var j = 0;
  var minLength;
  if (strs.length === 1) {
    return strs[0];
  }
  for (let i = 0; i < strs.length - 1; i++) {
    minLength = Math.min(strs[i].length, strs[i + 1].length);
  }

  while (j < minLength) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][j] !== strs[i + 1][j]) {
        return result;
      }
    }
    result = result + strs[0][j];
    j++;
  }
  return result;
};
