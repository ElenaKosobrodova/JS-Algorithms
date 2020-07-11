var firstUniqChar = function (s) {
  var counter = {};
  for (let val of s) {
    if (val in counter) {
      counter[val]++;
    } else {
      counter[val] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    var key = s[i];
    if (counter[key] == 1) {
      return i;
    }
  }
  return -1;
};
