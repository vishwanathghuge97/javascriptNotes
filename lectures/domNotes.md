# DOM - Document Object Model

- `document` is built in
- but objects like `console`, `Math`, `JSON`, `localStorage` etc. are built in objects provided by JS
- DOM = another built in object called **document object**
- The document object **represents / models the webpage**

---

```js
document.body.innerHTML = 'hello';
//  ^       ^      ^
// built-in  dot  property of     property
// object  notation  document    to change content
//                (but itself
//                 is object too)
```

---

## Some Properties of DOM

**① `document.title`**
```js
console.log(document.title); // for getting title
document.title = "new title"; // we can also change it, like we modify anything
```

**② `document.body`**
```js
document.body // accesses body inside document
```

---

## Methods

**③ `document.querySelector()`**
```js
document.querySelector("p")     // gets first <p> tag
document.querySelector(".box")  // first element with class box
document.querySelector("#id")   // element with that id
```
- lets us get any element from the page and put it inside JavaScript
- `< >` = means the actual tag

> every HTML element has a property `.innerHTML`  
> every HTML element is a JS Object

---

## `innerHTML` vs `innerText`

```js
// if element has: <b>Hello</b> World

element.innerHTML  // → "<b>Hello</b> World"  (with tags)
element.innerText  // → "Hello World"          (only text, not tags/spaces)
```

---

## Input & `.value`

`<input>` → void element (no closing tag, no inner content)

```js
document.querySelector("input").value        // read — gets what user typed
document.querySelector("input").value = "hi" // write — puts text inside textbox
```

> 💡 `.value` not `.innerHTML` for inputs — because `<input>` has no "inside HTML", user typed text is stored separately in `.value`

---

## DOM always gives String ⚠️

whenever we get a value from the DOM → value will be a **string**

```js
Number() // takes whatever value and converts it into Number
String() // converts any value to its String
```

---

## Type Coercion

= the language **secretly converts** one type to another for you

- if a string only contains a number and we do `-`, `*`, `/`
- → it will be converted into a number

```js
'25' - 5  // → 20 ✅
'25' * 2  // → 50 ✅
```

> 💡 but `+` won't convert — it'll just join strings:
> `'25' + 5` → `"255"` ❌  
> so always use `Number()` when doing math with DOM values

---

## Events & Event Listeners

- Clicks, keydowns → are **events**
- `onclick`, `onkeydown` → are **event listeners**

**HTML attribute:**
```html
<button onkeydown="...">  <!-- fires every time a key is pressed down -->
```

| Listener | Triggers on |
|---|---|
| `onclick` | click |
| `onkeydown` | key press |
| `onscroll` | scrolling |
| `onmouseenter` | hovering over |
| `onmouseleave` | stop hovering |
...and many more

---

## Event Object

- event is an **object** in JS
- every event listener gets an **event object** → event details sent automatically by browser

```js
element.onclick = function(event) {
  console.log(event);        // all event details
  console.log(event.key);    // which key was pressed
  console.log(event.target); // which element was clicked
}
```

> `e` or `event` or `evt` — all same, just a parameter name

---

## `window` Object

- `window` → an object like `document`

| | |
|---|---|
| `document` | web page |
| `window` | browser |

- we don't have to type `"window."` — JavaScript will automatically add it

```js
window.console.log("hi")  // same as ↓
console.log("hi")
```