//for example, confirm that Bastian ends on n
function confirmEnding(str, target) {
  let arr = str.slice(str.length - target.length, str.length);
  if (arr == target) {
    return true;
  } else {
    return false;
  }
}
