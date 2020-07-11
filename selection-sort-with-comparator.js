function selectionSort(arr, comparator) {
  if (comparator === undefined) {
    comparator = (a, b) => (a < b ? -1 : 1);
  }
  var min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[min]) < 0) {
        min = j;
      }
    }
    if (comparator(arr[i], arr[min]) > 0) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
