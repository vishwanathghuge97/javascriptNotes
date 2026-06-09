
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










### 1. Loop Control: Continue and Break

You can control how a loop runs by skipping steps or stopping it early.

- **`continue`**: Skips the rest of the current turn and jumps directly to the next turn of the loop. *(Note: In a while loop, always increment your variable before using continue to avoid an infinite loop).*
- **`break`**: Exits the loop completely and stops it from running any further.
- **`return`**: Exits the entire function immediately, which also stops any loop inside that function.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
    continue; // Skips the number 3
    }
    if (i === 5) {
    break; // Stops the loop completely at 5
    }
    console.log(i);
}

```

---

### 2. Arrays as References

When you assign an array to a new variable, it does not make a copy of the data. Instead, it points to the exact same array in memory. Changing one will change the other.

```javascript const array1 = [1, 2]; const array2 = array1; // Points to the same array

array2.push(3);

console.log(array1); // [1, 2, 3]

```

---

### 3. Array Destructuring

Array destructuring is a shortcut syntax used to extract multiple values from an array and save them straight into separate variables. It saves you from writing repetitive lines of code.

**The Basics** Instead of accessing each index one by one, you assign variables inside square brackets `[]` to match the positions of the array.

```javascript const myArray = ['apple', 'orange', 'banana'];

// The old way const firstFruit = myArray[0]; const secondFruit = myArray[1];

// The shortcut way (Destructuring) const [fruitOne, fruitTwo] = myArray;

console.log(fruitOne); // 'apple' console.log(fruitTwo); // 'orange'

```

**Skipping Items** You can skip values you don't need by simply leaving an empty space between the commas.

```javascript const numbers = [10, 20, 30];

// Skips the second item (20) const [firstNumber, , thirdNumber] = numbers;

console.log(thirdNumber); // 30

```

**Default Values** If you try to destructure a value that doesn't exist in the array, the variable will be `undefined`. You can assign a default value right in the brackets as a fallback.

```javascript const simpleArray = ['apple'];

// 'orange' is used because there is no second item const [fruitA, fruitB = 'orange'] = simpleArray;

console.log(fruitB); // 'orange'

```