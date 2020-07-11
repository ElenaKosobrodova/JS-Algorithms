// return the largest numbers in subarrays as an array

function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < 4; i++) {
    let a = 0;
    for (let j = 0; j < 4; j++) {
      if (arr[i][j] > a) {
        a = arr[i][j];
      }
    }
    newArr.push(a);
  }
  return newArr;
}
