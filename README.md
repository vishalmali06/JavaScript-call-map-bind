# JavaScript `call`, `apply`, and `bind` Methods

## Introduction

     JavaScript provides several methods to manipulate the `this` context within functions: `call`, `apply`, and `bind`. These methods allow you to set the value of `this` explicitly, making it easier to borrow functions from one object and use them with another.

## Code Examples

### Setup

```javascript
let name = {
    firstName: "Vishal",
    lastName: "Mali",
};

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
};

// call method
printFullName.call(name, "Tasgaon", "MH");

let name2 = {
    firstName: "Prajakta",
    lastName: "Mali",
};

// function borrowing
printFullName.call(name2, "Mumbai", "MH");

// apply method
printFullName.apply(name2, ["Mumbai", "MH"]);

// bind method
let printMyName = printFullName.bind(name2, "Tasgaon", "MH");
console.log(printMyName);
printMyName();
```

### Using call

     The `call` method calls a function with a given `this` value and arguments provided individually.
     
```javascript
printFullName.call(name, "Tasgaon", "MH");
// Output: Vishal Mali Tasgaon MH
```

### Function Borrowing with call

     You can borrow the `printFullName` function from one object and use it with another object.
     
```javascript
let name2 = {
    firstName: "Prajakta",
    lastName: "Mali",
};

printFullName.call(name2, "Mumbai", "MH");
// Output: Prajakta Mali Mumbai MH
```

### Using apply

     The `apply` method is similar to `call`, but it takes an array of arguments instead of listing them individually.
     
```javascript
printFullName.apply(name2, ["Mumbai", "MH"]);
// Output: Prajakta Mali Mumbai MH
```

### Using bind

     The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
     
```javascript
let printMyName = printFullName.bind(name2, "Tasgaon", "MH");
console.log(printMyName);
printMyName();
// Output of console.log(printMyName): [Function: bound printFullName]
// Output of printMyName(): Prajakta Mali Tasgaon MH
```

