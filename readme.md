# Functional Programming

A short overview of functional programming, intended for junior Javascript developers who have zero experience in functional programming. This is still a work in progress.

# Introduction

* What is functional programming?
  * Most of the time we code in an imperative, object-oriented style. This is where objects can have state, and functions can modify state. 
    * This can lead to more difficult testing of a function as we have to set up the environment around the function before we can test it, due to part of the inputs of the function being in that environment.
    * It can be harder to track down bugs in our code, even if we know that a function is working as intended. This is because we may be altering the state of the program without realising. This is especially a problem with asynchronous code as you are not guaranteed to have the same state even during the execution of a function.
  * Functional programming is called declarative coding style. We pass functions every bit of data they need, so they do not rely on outside state.
    * Because functional programming does not input from or output to anything outside the function, we must use some impure functions to do this. The core of our code can be completely pure functions though.

# Principles

1. Pure Functions
  * Functions are not able to access any variable from outside their own scope. This means if they are in an object they cannot use or alter the state of that object. They also cannot use or alter global variables.
  * Benefits:
    * Doesn't alter state.
    * Easier to test.
    * Tends to promote using many smaller functions to achieve a goal.
  * Drawbacks:
    * Can't interact with anything outside the program, so it requires a layer of impure programming for all external inputs and outputs.

2. Recursion
  * Benefits:
    * Often easier to code than an iterative (looping) approach.
    * Compilers can compile 'tail-end recursion' into iterative code, meaning we don't need to worry about stack overflow.
  * Drawbacks:
    * Javascript is an (arguably) interpreted language. That is, it does not get turned into binary until it is about to be executed, line by line. This means that compilers cannot optimise for tail-end recursion calls, putting a cap of 10000 functions on the call stack. This can turn into a very real technical limitation for a Javascript program.

3. Immutable Data
  * Benefits:
    * We always know what a variable is after it has been assigned. We never reassign it, so we cannot introduce errors this way.

# Concepts

1. Higher-order functions (HOF)
  * Functions can be assigned to variables, allowing us to pass them around as parameters to other functions.

2. Currying
  * Named after Haskell Curry, who also came up with the Haskell functional programming language. Because we can use higher order functions, we can set up complicated functions that are simple for us to understand.

# Summary


