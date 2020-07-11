function rot13(str) {
  let results = [];
  for (let i = 0; i < str.length; i++) {
    let x = str.charCodeAt(i);
    if (x < 65 || x > 90) {
      results.push(String.fromCharCode(x));
    } else {
      if (x > 77) {
        results.push(String.fromCharCode(x - 13));
      } else {
        results.push(String.fromCharCode(x + 13));
      }
    }
  }
  return results.join("");
}
