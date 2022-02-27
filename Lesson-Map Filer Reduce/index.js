// ES6 Map Filter Reduce

/// Map - Creates a new arry by doing something with each item in an array.

var numbers = [3, 56, 2, 48, 5];

// function multiply(x) {
//    return x * 2;
// }

var newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

/// Filter - Create a new arry by keeping the items that return true from an evaluation
var neuNums = numbers.filter((i) => i > 50);
console.log(neuNums);

/// Reduce - Accumulate a value by doing something to each item in an array.

var newReduce = numbers.reduce((accumulator, nums) => accumulator + nums);
console.log(newReduce);

// var newReduce = 0;
// numbers.forEach((j) => (newReduce += j));
// console.log(newReduce);

/// Find - Find the first item that matches search in an array.
var newfind = numbers.find((i) => i > 10);
console.log(newfind);

/// FindIndex - Find the index of the first item that matches.
var newIndex = numbers.findIndex((k) => k < 10);
console.log(newIndex);
