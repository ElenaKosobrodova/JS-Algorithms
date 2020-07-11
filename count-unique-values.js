//For a sorted array that can have negative numbers, return the number of unique values in the array.

function countUniqueValues(arr) {
  let index = 0;
  let arr2 = [];
  arr2 = arr;

  if (arr2.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[index] !== arr2[i]) {
      index++;
      arr2[index] = arr2[i];
    }
  }
  return index + 1;
}
