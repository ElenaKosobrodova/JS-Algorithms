function fearNoLetter(str) {
  for (let i = 0; i < str.length; i++) {
    return String.fromCharCode(str.charCodeAt(i) + 1);
  }
}
