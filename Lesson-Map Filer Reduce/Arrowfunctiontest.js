var numbers = [3, 56, 2, 48, 5];

// Map with arrow function

var mapNums = numbers.map((nums) => nums ** 2);
console.log(mapNums);

// Filter with arrow function

var filterNums = numbers.filter((nums) => nums < 10);
console.log(filterNums);

// Reduce with arrow function
var reduceFilter = numbers.reduce((accumulator, nums) => nums + accumulator);
console.log(reduceFilter);

// Find with arrow function
var findNums = numbers.find((nums) => nums < 10);
console.log(findNums);

// FindIndex with arrow function
var indexNums = numbers.findIndex((nums) => nums > 20);
console.log(indexNums);
