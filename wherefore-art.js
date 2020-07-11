//function looking through an array of objects (collection) and return an array of all objects
//that have matching name and value pairs (source)

function whatIsName(collection, source) {
  let arr = [];
  let sourceKey = Object.keys(source);
  arr = collection.filter((a) => {
    return sourceKey.every((b) => a.hasOwnProperty(b) && a[b] === source[b]);
  });
  return arr;
}
