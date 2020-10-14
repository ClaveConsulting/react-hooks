# useObjectState

[Documentation](https://claveconsulting.github.io/react-hooks/use-object-state)

```shell
npm install @clave/use-object-state
```

## Usage

```jsx
import useObjectState from "@clave/use-object-state";

// useObjectState instead of useState
const [value, setValue] = useObjectState({
  name: "Ada Lovelace",
  born: "December 10, 1815",
  died: "November 27, 1852",
  aged: 36,
});

console.log(value);
// {
//   name: "Ada Lovelace",
//   born: "December 10, 1815",
//   died: "November 27, 1852",
//   aged: 36,
// }

// setValue behaves like normal
setValue({}); // the value is now an empty object, {}

// Set a key to a value
setValue.set("name", "Grace Hopper");
// {
//   name: "Grace Hopper",
//   born: "December 10, 1815",
//   died: "November 27, 1852",
//   aged: 36,
// }

// Set several keys to values
setValue.with({
  name: "Grace Hopper",
  aged: 85,
});
// {
//   name: "Grace Hopper",
//   born: "December 10, 1815",
//   died: "November 27, 1852",
//   aged: 85,
// }

// Edit a key
setValue.edit("name", (name) => name.ToUpperCase());
// {
//   name: "ADA LOVELACE",
//   born: "December 10, 1815",
//   died: "November 27, 1852",
//   aged: 36,
// }
```
