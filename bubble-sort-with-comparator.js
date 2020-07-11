function bubbleSort(a, comparator) {
  if (comparator === undefined) {
    comparator = (a, b) => (a < b ? -1 : 1);
  }
  var noSwaps = true;
  for (let i = a.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (comparator(a[j], a[j + 1]) > 0) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return a;
}
