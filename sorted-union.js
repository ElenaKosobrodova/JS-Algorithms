//Take two or more arrays and return a new array of unique values in the order
//of the original provided arrays

function uniteUnique(arr) {
  let arg = [...arguments];
  let result = [];
  for (let i = 0; i < arg.length; i++) {
    for (let j = 0; j < arg[i].length; j++) {
      if (!result.includes(arg[i][j])) {
        result.push(arg[i][j]);
      }
    }
  }
  return result;
}
