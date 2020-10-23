# useArrayState

> Make it easier to work with stateful arrays

[Documentation](https://claveconsulting.github.io/react-hooks/use-array-state)

```shell
npm install @clave/use-array-state
```

The goal of this hook is to make it easier to manipulate array state. For example, if you want to add a new item to an array you can call `setState.append(value)`.

## Usage

```jsx
import useArrayState from "@clave/use-array-state";

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

setItems.removeWhere((v) => v === "b"); // ["a", "c"]

// Edit the value at a specified index
setItems.editAt(1, (v) => v.ToUpperCase()); // ["a", "B", "c"]

// Replace the value at a specified index
setItems.replaceAt(1, "x"); // ["a", "x", "c"]

// Replace a value with another value
setItems.replace("b", "x"); // ["a", "x", "c"]
```

### Alternative usage

If you worry about the size of the package with all these, potentially unnecessary, methods, then there is an alternative way to use it. All of the methods are exported from the module, so you can import each one individually and use only the ones you need:

```jsx
import { useState } from "react";
import { append, removeAt } from "@clave/use-array-state";

export default function MyComponent(){
  const [items, setItems] = useState([]);

  return (
    <button onClick={() => setItems(append("some value"))}>
    {items.map((value, index) => (
      <div>
        {value}
        <button onClick={() => setItems(removeAt(index))}>
      </div>
    ))}
  )
}

```

That is, instead of using `setItems.something(args)` you can call `setItems(something(args))` if you add `import { something } from "@clave/use-array-state";`. This will let the tree-shaker exclude all unused methods.
