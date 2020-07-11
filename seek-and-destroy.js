function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i]) > 0) {
      delete arr[i];
    }
  }
  return arr.filter(Boolean);
}
