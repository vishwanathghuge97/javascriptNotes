
# Arrays and Loops in JavaScript

## 1. Arrays
An array is a way to store multiple values in a single variable. You access these values using an index (starting at 0).

```javascript
const myArray = ['apple', 'orange', 'banana'];
// Accessing a value
console.log(myArray[0]); // 'apple'
// Adding a value
myArray.push('grape');
// Removing a value
myArray.splice(0, 1); // Removes 1 item starting at index 0
```

## 2. While Loops
A `while` loop runs code repeatedly as long as a specified condition is true.

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++; // Increment i to avoid an infinite loop
}
```

## 3. For Loops
A `for` loop is the most common way to iterate a specific number of times. It combines the variable declaration, the condition, and the increment step into one line.

```javascript
def for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## 4. Looping through an Array
To process every item in an array, you use a loop to count from 0 to the length of the array.

```javascript
const todoList = ['Make dinner', 'Wash dishes'];
for (let i = 0; i < todoList.length; i++) {
  console.log(todoList[i]);
}
```