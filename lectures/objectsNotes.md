# JavaScript — Objects, JSON & localStorage

## Objects

JSON = JavaScript Object Notation. A function inside an object is called a **method**.

```js
const product = {
  name: 'socks',   // property: value
  price: 190
};
```

### Common operations

```js
// Access value
console.log(product.name);

// Change value
product.name = 'token';

// Print whole object
console.log(product);

// Add new property
product.newProperty = 45;

// Delete a property
delete product.newProperty;

// Bracket notation
product['name'];
```

Objects can be nested inside objects — only curly braces needed:

```js
const product3 = {
  product4: {
    // ...
  }
};
```

Functions inside objects (methods):

```js
const obj = {
  function1() {
    console.log('function inside obj');
  }
};
```

---

## Auto Boxing

When you call a method on a **primitive**, JS temporarily wraps it in an object, uses the method, then throws the wrapper away.

```js
"hello".toUpperCase()
```

---

## Objects are References

Just like Java — assigning an object to a variable copies the reference, not the value.

---

## Object Shortcuts

### 1. Destructuring

```js
const obj = { name: "Vishwanath", age: 20 };

// Instead of:
const name = obj.name;

// Shortcut:
const { name } = obj;
```

### 2. Shorthand Property

```js
const name = "Vishwanath";

// Instead of: { name: name }
const obj = { name };  // same thing
```

### 3. Shorthand Method

```js
// function keyword is optional inside an object
const obj = {
  greet() {
    console.log("hi");
  }
};
```

---

## JSON

> `null` being `typeof object` is a bug, not a feature.

```js
const person = {
  name: "Vishwanath",
  age: 20
};

// JS Object → JSON string
const jsonString = JSON.stringify(person);

// JSON string → JS Object
JSON.parse(jsonString);
```

- `JSON.stringify` → plain string
- `JSON.parse` → JS Object

---

## localStorage

> localStorage only saves strings — use JSON.stringify/parse for objects.

```js
// Store
localStorage.setItem("Name", "Vishwanath");

// Get
localStorage.getItem("Name");

// Remove one item
localStorage.removeItem("Name");

// Clear everything
localStorage.clear();
```

---

## null vs undefined

- `null` — intentional absence ("I want *here* to be empty")
- `undefined` — JS said it exists but hasn't been declared/assigned yet