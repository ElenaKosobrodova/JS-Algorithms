//Take the firstconsonant (or consonant cluster) of an English word, move it to the end of the word
// and add suffix "ay".If a word begins with a vowel, add "way" to the end.

function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else {
    if (str.match(regex) === nul) {
      pigLatin = str + "ay";
    } else {
      let vowelIndice = str.indexOf(str.match(regex)[0]);
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  }
  return pigLatin;
}

//second solution

function translatePigLatin(str) {
  let arr = str.split("");
  let vowels = ["a", "e", "u", "i", "o"];
  if (arr.some((a) => vowels.includes(a))) {
    if (vowels.inclides(arr[0])) {
      arr.push("w");
    } else {
      do {
        let cons = arr[0];
        arr.shift();
        arr.push(cons);
      } while (!vowels.includes(arr[0]));
    }
  }
  arr.push("ay");
  returnarr.toString().split(",").join("");
}
