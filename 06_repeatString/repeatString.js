const repeatString = function (string, number) {
  let result = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= number; i++) {
    result += string;
  }
  return result;
};
// Do not edit below this line
module.exports = repeatString;
