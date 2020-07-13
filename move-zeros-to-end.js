/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 1;
  let zeros = 0;
  for (let i = 0; i < nums.length - zeros; i += j) {
    if (nums[i] !== 0) {
      j = 1;
    } else {
      nums.splice(i, 1);
      nums.push(0);
      zeros++;
      j = -1;
    }
  }
  return nums;
};
