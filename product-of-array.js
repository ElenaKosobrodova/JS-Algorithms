//iterative solution

function productOfArray(arr) {
  if (arr.length === 0) {
    return;
  }
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

//recursive solution

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//with reduce

function productOfArray(arr) {
  if (arr.length === 0) {
    return;
  }
  let product = 1;
  product = arr.reduce((a, b) => a * b);
  return product;
}
