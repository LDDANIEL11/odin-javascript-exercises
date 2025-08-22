const fibonacci = function (n) {
  let z = Number(n);
  if (z < 0) return "OOPS";
  if (z <= 0) return 0;
  if (z == 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
