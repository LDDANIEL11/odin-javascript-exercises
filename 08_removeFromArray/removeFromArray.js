const removeFromArray = function (arr, ...args) {
  let array = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!args.includes(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
