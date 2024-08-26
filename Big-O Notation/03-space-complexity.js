function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// O(1) space complexity
sum([1, 2, 3, 4, 5]); // 15

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// O(n) space complexity
double([1, 2, 3, 4, 5]); // [2, 4, 6, 8, 10]
double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
