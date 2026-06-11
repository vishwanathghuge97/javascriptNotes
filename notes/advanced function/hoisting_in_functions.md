Hoisting is a feature that lets you **call regular functions before they are defined** in your code.

* **How it works:** It applies only to **function declarations**. You can place the function call anywhere, and the code will still run.

* **Limitations:** It **does not work** with **arrow functions** or functions saved in **variables** (`const = function()`), which must be defined before use.