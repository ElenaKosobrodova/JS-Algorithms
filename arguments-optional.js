// Create a function that sums two arguments together.
//If only one argument is provided then return a function that expects one argument and returns the sum.

function addTogether() {
  let args = Array.from(arguments);
  return args.some((n) => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : (n) => (typeof n === "number" ? n + args[0] : undefined);
}
