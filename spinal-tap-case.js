//convert a string to spinal case (all-lowcase-words-joined-by-dashes)

function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|_|\S/)
    .join("-")
    .toLowerCase();
}
