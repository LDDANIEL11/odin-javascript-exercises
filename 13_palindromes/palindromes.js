const palindromes = function (str) {
  const all = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = str
    .toLowerCase()
    .split("")
    .filter((Character) => all.includes(Character))
    .join("");

  const palindrome = cleanedString.split("").reverse().join("");

  return palindrome === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
