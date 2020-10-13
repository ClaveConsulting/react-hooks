# useObjectState

[Documentation](https://claveconsulting.github.io/react-hooks/use-object-state)

```
npm install @clave/use-object-state
```

## Usage

```jsx
// useObjectState instead of useState
const [value, setValue] = useObjectState({
  name: "Ada Lovelace",
  born: "December 10, 1815",
  died: "November 27, 1852",
  aged: 36,
});

console.log(value);

// setValue behaves like normal
setValue(true); // true

// Set a key to a value
setValue.set("name", "Grace Hopper");

// Set several keys to values
setValue.with({
  name: "Grace Hopper",
});

// Edit a key
setValue.edit("name", (name) => name.ToUpperCase());
```
