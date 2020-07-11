// For an array similar to this [-5, -3, -2, 0, 2, 4, 7], find the pair of the elements whose sum is equal to zero.
//The array is sorted and have both positive and negative numbers.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
