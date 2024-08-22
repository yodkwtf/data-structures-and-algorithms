## Big-O Notation

Big-O notation is a way to describe the performance of an algorithm. It is used to describe the efficiency of an algorithm in terms of time and space complexity. It is a mathematical notation that describes how an algorithm scales in terms of time and space complexity as the input size grows.

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
