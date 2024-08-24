// O(n)
function logAtLeast5(n) {
  for (let i = 0; i < Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(3); // Logs 1, 2, 3, 4, 5
logAtLeast5(10); // Logs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// O(1)
function logAtMost5(n) {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(3); // Logs 1, 2, 3
logAtMost5(10); // Logs 1, 2, 3, 4, 5
