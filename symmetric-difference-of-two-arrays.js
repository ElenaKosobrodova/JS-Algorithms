function diffArray(arr1, arr2) {
  let newArr = [];
  newArr = arr1
    .filter(a => !arr2.includes(a))
    .concat(arr2.filter(b => !arr1.includes(b)));
  return newArr;
}
