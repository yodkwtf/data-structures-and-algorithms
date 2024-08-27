## Big-O Notation

- Describes algorithm performance in terms of time and space complexity
- Shows how runtime and space usage scale with input size
- Helps find the most optimized solution

#### Why Big-O Notation?

- Important when data size is large
- Identifies the most efficient algorithm

###### Example:

```js
// Function to reverse a list of numbers
function reverseList(list) {
  let reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}
```

- **Time Complexity**: O(n), where n is the number of elements
- Time complexity is less significant for small lists
- Crucial for large lists

#### How to Calculate Big-O?

- Based on the number of operations in the worst-case scenario

Common Big-O notations:

- **O(1)**: Constant Time
- **O(log n)**: Logarithmic Time
- **O(n)**: Linear Time
- **O(n log n)**: Linearithmic Time
- **O(n^2)**: Quadratic Time
- **O(2^n)**: Exponential Time

#### Big-O Rules

1. **Constants Don't Matter**: O(1) remains O(1) regardless of the number of operations
1. **Drop the Constants**: O(5n) simplifies to O(n)
1. **Different Terms for Inputs**: O(n \* m) if there are nested loops with n and m operations
1. **Drop Non-Dominant Terms**: O(n^2 + n) simplifies to O(n^2)
1. **Different Inputs for Different Variables**: O(n + m) if there are separate loops for n and m operations

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

- **Time Complexity**: O(n) in the worst case

```js
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(3); // Logs 1, 2, 3
logAtMost5(10); // Logs 1, 2, 3, 4, 5
```

- **Time Complexity**: O(1) since the loop runs only 5 times at most even in worst case

#### Big-O Chart

![Big-O Chart](https://hsuan.info/images/BigO.jpeg)

## Space Complexity

- Measures the amount of working storage an algorithm needs
- Describes memory usage as input grows
- Measured in Big-O notation

#### Rules for Space Complexity

1. **Primitives** (booleans, numbers, undefined, null): O(1)
1. **Strings**: O(n) where n is the length of the string
1. **Reference Types**: O(n), where n is length (arrays) or number of keys (objects)

###### Examples:

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

- **Space Complexity**: O(1) because the space needed doesn't grow with input size

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

- **Space Complexity**: O(n) because space grows linearly with input size

## Logarithms

- Inverse of exponentiation
- Describes the rate of growth of a function
- Common bases: 2, 10, e

The general form of a logarithm is:

> <p>log<sub>base</sub>(value) = exponent ---> base<sup>exponent</sup> = value</p>

#### Examples:

- log<sub>2</sub>(8) = 3 because 2<sup>3</sup> = 8
- log<sub>5</sub>(25) = 2 because 5<sup>2</sup> = 25

#### Logarithmic Time Complexity

- Represented as O(log n)
- Common in algorithms dividing the problem in half each time
- Appears in searching algorithms (e.g., Binary Search), efficient sorting algorithms (e.g., Quick Sort), divide and conquer algorithms (e.g., Merge Sort), and recursion
