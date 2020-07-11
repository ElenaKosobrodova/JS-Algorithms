function slasher(arr, num) {
  let removed = arr.splice(num, arr.length - num);
  return removed;
}
