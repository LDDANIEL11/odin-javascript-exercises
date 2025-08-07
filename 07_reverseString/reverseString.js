const reverseString = function (string) {
  const splittedString = string.split("");
  let result = "";
  for (let i = splittedString.length - 1; i >= 0; i--) {
    result += splittedString[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
