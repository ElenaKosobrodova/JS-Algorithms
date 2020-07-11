//chunk array in groups of specified length

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let k = 0;
  for (let i = 0; i < arr.length; i += size) {
    newArr[k++] = arr.slice(0 + i, size + i);
  }
  return newArr;
}
