## Big-O Notation

Big-O notation is a way to describe the performance of an algorithm. It is used to describe the efficiency of an algorithm in terms of time and space complexity. It is a mathematical notation that describes how the runtime and the space utilization of an algorithm scales as the input grow.

It is basically a measure to find the best and most optimized solution for a problem out of all possible solutions. It is used to compare different algorithms and find the best one for a given problem.

#### Why Big-O Notation?

If a data size is small, then the time and space complexity of an algorithm may not matter much. But as the data size grows, the efficiency of the algorithm becomes more important.

###### Example:

```js
// Function to reverse the given list of numbers
function reverseList(list) {
  let reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}
```

In the above code, the time complexity of the `reverseList` function is O(n) where n is the number of elements in the list. If we ony have 5 elements in the list, then the time complexity of the function is O(5). But if we have millions and millions of elements in the list, then the time complexity of the function is O(millions). Hence, we are always looking for the best and most optimized solution for a problem.

#### How to Calculate Big-O?

Big-O notation is calculated based on the number of operations an algorithm performs. It is calculated based on the worst-case scenario.

Here are some common Big-O notations:

- O(1) - Constant Time
- O(log n) - Logarithmic Time
- O(n) - Linear Time
- O(n log n) - Linearithmic Time
- O(n^2) - Quadratic Time
- O(2^n) - Exponential Time

#### Big-O Rules

In the big picture, we only care about the most significant terms in the time complexity. The terms which make the Big-O chart go up or down. Here are some rule of thumbs for Big-O:

1. **Constants Don't Matter**: If an algorithm takes 5 operations or 100 operations, it is still O(1) time complexity.
2. **Drop the Constants**: If an algorithm takes 5n operations, then the time complexity is O(n).
3. **Different Terms for Inputs**: If an algorithm takes n operations in the outer loop and m operations in the inner loop, then the time complexity is O(n \* m).
4. **Drop the Non-Dominant Terms**: If an algorithm takes n^2 + n operations, then the time complexity is O(n^2).
5. **Different Inputs for Different Variables**: If an algorithm takes n operations for one input and m operations for another input, then the time complexity is O(n + m).

###### Examples:

```js
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(3); // Logs 1, 2, 3, 4, 5
logAtLeast5(10); // Logs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

In the above code, the time complexity of the `logAtLeast5` function is O(n) because in the worst-case scenario, the loop runs n times.

```js
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(3); // Logs 1, 2, 3
logAtMost5(10); // Logs 1, 2, 3, 4, 5
```

In the above code, the time complexity of the `logAtMost5` function is O(1) because the loop runs only 5 times in the worst-case scenario.

###### Big-O Chart

![Big-O Chart](https://hsuan.info/images/BigO.jpeg)
