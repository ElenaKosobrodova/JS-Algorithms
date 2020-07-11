//Convert characters &,<,>,",' in a string to their corresponding HTML entities

function convertHTML(str) {
  let res = str.replace(/&|<|>|'|"/g, (x) => {
    switch (x) {
      case "&":
        return "&amp;";
        break;
      case "<":
        return "&lt;";
        break;
      case ">":
        return "&gt:";
        break;
      case '"':
        return "&quot;";
        break;
      case "'":
        return "&apos;";
        break;
    }
  });
  return res;
}
