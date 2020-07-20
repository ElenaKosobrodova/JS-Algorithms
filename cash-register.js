function checkRegister(price, cash, cid) {
  var curr = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  var names = [
    "ONE HUNDRED",
    "TWENTY",
    "TEN",
    "FIVE",
    "ONE",
    "QUARTER",
    "DIME",
    "NICKEL",
    "PENNY"
  ];
  var realChange = cash - price;
  var change = 100 * realChange;
  var allCash = 0;
  var num = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < cid.length; i++) {
    allCash += cid[i][1];
    let ind = names.indexOf(cid[i][0]);
    num[ind] = Math.round((100 * cid[i][1]) / curr[ind]);
  }
  var result = {};
  for (let k = 0; k < num.length; k++) {
    while (num[k] > 0 && change - curr[k] >= 0) {
      change -= curr[k];
      num[k] -= 1;
      if (names[k] in result) {
        result[names[k]] += curr[k] / 100;
      } else {
        result[names[k]] = curr[k] / 100;
      }
    }
  }
  if (change > 0) {
    return { status: "INSUFICIENT_FUNDS", change: [] };
  }
  var r = [];
  for (let key in result) {
    r.push([key, result[key]]);
  }
  if (allCash == realChange) {
    return { status: "CLOSED", change: cid };
  }
  if (allCash > realChange) {
    return { status: "OPEN", change: r };
  }
}
