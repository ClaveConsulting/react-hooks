# useBooleanState

[Documentation](https://claveconsulting.github.io/react-hooks/use-boolean-state)

```shell
npm install @clave/use-boolean-state
```

## Usage

```jsx
import useBooleanState from "@clave/use-boolean-state";

// useBooleanState instead of useState
const [checked, setChecked] = useBooleanState(); //defaults to false

console.log(checked); // false

// setChecked behaves like normal
setChecked(true); // true

// Set the value to true
setChecked.toTrue(); // true

// Set the value to false
setChecked.toFalse(); // false

// Set the value to the opposite
setChecked.toggle(); // true -> false, false -> true
```
