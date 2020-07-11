//Given an array of positive integers and a number, return the minimal length
//of a contiguous subarray for which the sum of elements is grater or equal to te given number.
//If the sum of all elements is less than the number, return 0.

function minSubArrayLen(arr, num) {
  let sum = 0;
  let left = 0;
  let right = 0;
  let len = arr.length + 1;
  while (left < arr.length) {
    if (sum < num && right < arr.length) {
      sum += arr[right];
      right++;
    } else if (sum >= num) {
      len = Math.min(len, right - left);
      sum -= arr[left];
      left++;
    } else {
      break;
    }
  }
  if (len > arr.length) {
    return 0;
  } else {
    return len;
  }
}
