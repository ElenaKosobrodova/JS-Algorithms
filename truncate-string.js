function truncateString(str, num) {
  if (num <= 3) {
    str = str.slice(0, num) + "...";
  } else {
    if (num < str.length) {
      str = str.slice(0, num - 3) + "...";
    }
  }
  return str;
}
