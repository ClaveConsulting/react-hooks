# useArrayState

[Documentation](https://claveconsulting.github.io/react-hooks/use-array-state)

```
npm install @clave/use-array-state
```

## Usage

```jsx
// useArrayState instead of useState
const [items, setItems] = useArrayState(["a", "b", "c"]);

console.log(items); // ["a", "b", "c"]

// setItems behaves like normal
setItems(["x", "y", "z"]); // ["x", "y", "z"]

// Append an item to the end of the array
setItems.append("d"); // ["a", "b", "c", "d"]

// Append multiple items to the end of the array
setItems.append("d", "e", "f"); // ["a", "b", "c", "d", "e", "f"]

// Prepend an item to the beginning of the array
setItems.prepend("x"); // ["x", "a", "b", "c"]

// Prepend multiple items to the beginning of the array
setItems.prepend("x", "y", "z"); // ["x", "y", "z", "a", "b", "c"]

// Insert an item somewhere in the array
setItems.insertAt(1, "x"); // ["a", "x", "b", "c"]

// Insert multiple items somewhere in the array
setItems.insertAt(1, "x", "y", "z"); // ["a", "x", "y", "z", "b", "c"]

// Remove a value from the list
setItems.remove("b"); // ["a", "c"]

// Remove several values from the list
setItems.remove("b", "a"); // ["c"]

// Remove the value at specified index
setItems.remove(1); // ["a", "c"]

// Edit the value at a specified index
setItems.editAt(1, (v) => v.ToUpperCase()); // ["a", "B", "c"]

// Replace the value at a specified index
setItems.replaceAt(1, "x"); // ["a", "x", "c"]

// Replace a value with another value
setItems.replace("b", "x"); // ["a", "x", "c"]
```