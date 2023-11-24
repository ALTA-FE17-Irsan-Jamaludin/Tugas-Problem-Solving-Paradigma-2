const fiboTopDown = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return fiboTopDown(n - 1) + fiboTopDown(n - 2);
};

console.log(fiboTopDown(0));
console.log(fiboTopDown(1));
console.log(fiboTopDown(2));
console.log(fiboTopDown(3));
console.log(fiboTopDown(5));
console.log(fiboTopDown(6));
console.log(fiboTopDown(7));
console.log(fiboTopDown(9));
console.log(fiboTopDown(10));
