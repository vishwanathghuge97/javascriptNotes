const myArray = [10,20,30];
console.log(myArray);

console. log(myArray[0]);
myArray[0] = 99;
console.log(myArray);


// An array is an object
// (it's a special type of object)


console.log(Array.isArray([1, 2]));
console.log(myArray.length);

// .push()
// Adds a value to the end of the array
myArray.push(100);
console.log(myArray);

// .splice()
// Removes a value from an array
// 1. Index we want to remove
// 2. Number of values to remove
myArray.splice(0, 1); // its kinda range
console.log(myArray);





