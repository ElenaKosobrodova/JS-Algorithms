var maxArea = function (height) {
  var begin = 0;
  var end = height.length - 1;
  var area = (height.length - 1) * Math.min(height[begin], height[end]);
  var temp = 0;

  if (height.length < 2) {
    return 0;
  }

  while (end > 0 && begin < height.length && end > begin) {
    if (height[begin] > height[end]) {
      end--;
    } else {
      begin++;
    }
    temp = (end - begin) * Math.min(height[begin], height[end]);
    area = Math.max(temp, area);
  }
  return area;
};
