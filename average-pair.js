// Given a sorted array of integers and a target average, determine is there is a pair of values in the array where the average of the pair equals the target average.

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === num) {
      return true;
    } else if (average < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
