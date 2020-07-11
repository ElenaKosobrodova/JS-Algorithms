//Perform a search on the sentence (str) and replace one word (before) with another word (after)

function myReplace(str, before, after) {
  if (before.search(/[A-Z]/) == "-1") {
    return str.replace(before, after.toLowerCase());
  } else {
    let afterArr = after.split("");
    afterArr[0] = afterArr[0].toUpperCase();
    let after1 = afterArr.join("");
    return str.replace(before, after1);
  }
}
