const sumAll = function (start, end) {
  let sum = 0;
  if (start > end) {
    const help = start;
    start = end;
    end = help;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
