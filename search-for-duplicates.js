//The function accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates(...arr) {

  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val in counter) {
      counter[val] = counter[val] + 1;
    } else {
      counter[val] = 1;
    }
  }
  for (let key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }
  return false;
}
