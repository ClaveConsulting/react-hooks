# useBooleanState

> Make it easier to work with state of boolean values

[Documentation](https://claveconsulting.github.io/react-hooks/use-boolean-state)

```shell
npm install @clave/use-boolean-state
```

The goal of this hook is to make it easier to work with boolean state. It's very common to toggle a boolean value, and it's possible to do that with `setState(x => !x)`, but isn't it easier and clearer to use `setState.toggle()`? This is very useful for buttons, where you can pass the toggle method by reference as `<button onClick={isOpen.toggle}>Open</button>`. There are also `setState.toTrue()` and `setState.toFalse()` available for easily setting or resetting the value.

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
