1) for popup : alert('hello');
   document.body.innerHTML = 'hello';
// The entire page now just shows: hello

2) for rounding num : Math.round(2.5); // 3

3) typeof 3.14           // "number"

4) The backtick **\`** is used in JavaScript for **Template Literals** (also called template strings).

**Basic syntax:**
```js
const msg = `Hello, World!`;
```

**Why it exists — 3 main powers:**

**1. String interpolation** — embed expressions directly
```js
const name = "Vishwanath";
const age = 20;

// Old way ❌
"Hello, " + name + ". You are " + age + " years old."

// Backtick way ✅
`Hello, ${name}. You are ${age} years old.`
```

**2. Multi-line strings**
```js
// Old way ❌
"line one\n" +
"line two\n" +
"line three"

// Backtick way ✅
`line one
line two
line three`
```

**3. Expression evaluation inside `${}`**
```js
`2 + 2 = ${2 + 2}`          // "2 + 2 = 4"
`Is adult: ${age >= 18}`    // "Is adult: true"
`${name.toUpperCase()}`     // "VISHWANATH"
```

**Nesting quotes freely:**
```js
// No escaping needed
`She said "hello" and it's fine`
```

5) // Declaration
let x = 10;      // reassignable
const x = 10;    // fixed
var x = 10;      // avoid

// Naming rules
let name        // ✅
let _name       // ✅
let $name       // ✅
let name2       // ✅
let 2name       // ❌ no leading number
let my-name     // ❌ no hyphens
let let         // ❌ no reserved words

// Case sensitive
let name = "a";
let Name = "b"; // different variable

// Scope
{ let a = 1; }   // dies here
{ const b = 1; } // dies here
{ var c = 1; }   // leaks out ⚠️

6) falsy : NaN,0,false,undefined,null,''.











