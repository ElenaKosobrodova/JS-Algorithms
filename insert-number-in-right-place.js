function getIndexToInsert(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a > b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
}
