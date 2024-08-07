## Recursion

A recursive function refers/calls itself unless it reaches a base case which tells it to stop. It's like inception, function within a function within a function.

#### Stack Overflow

If there's no condition specified to stop the function from calling itself, stack overflow can occur. Basically, the function keeps adding itself to the call stack without popping itself, and eventually, the call stack runs out of memory and crashes the program.

#### Base Case

The condition is used to stop the recursive function from being run infinite times. Every recursive function must have one base case or stop point.

#### Rules for Recursion

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer to return when needed. Usually, we have 2 returns.

#### When to use Recursion?

Anything we do with recursion can also be done with iterations (loops). It depends on the specifics.

Recursion does allow us not to write repetitive code and improves readability but it takes a large stack (memory) in the system and can cause stack overflows.

> Now some methods allow using recursion w/o growing call stack. In Javascript, we have something called `Tail Call Optimization` for that.

Recursions are used a lot with the **Divide and Conquer** techniques.

## Contents

- [Recursive Function](recursive-function.js)
- [Factorial](factorial.js)
- [Fibonacci](fibonacci.js)
- [Reverse a String](reverse-string.js)
