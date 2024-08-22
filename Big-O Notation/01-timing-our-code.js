const addUptoN = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const t1 = performance.now();
addUptoN(1000000000);
const t2 = performance.now();

console.log(`Time Elapsed Base Case: ${(t2 - t1) / 1000} seconds.`);

// Optimized Solution
const add = (n) => (n * (n + 1)) / 2;

const t3 = performance.now();
add(1000000000);
const t4 = performance.now();

console.log(`Time Elapsed Optimized: ${(t4 - t3) / 1000} seconds.`);
