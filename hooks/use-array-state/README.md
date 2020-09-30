# useArrayState

```
npm install @clave/use-array-state
```

## Usage

```jsx
// Use it instead of useState
const [items, setItems] = useArrayState([1, 2, 3]);

// items is an array

// setItems behaves like normal
setItems([9, 8, 7]);

// setItems.append adds the value to the end of the array
setItems.append(4); // [1, 2, 3, 4]

// setItems.prepend adds the value to the beginning of the array
setItems.prepend(0); // [0, 1, 2, 3]
```
