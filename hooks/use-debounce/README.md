# useDebounce

> Wait until a value stops changing

[Documentation](https://claveconsulting.github.io/react-hooks/use-debounce)

```shell
npm install @clave/use-debounce
```

This hook returns a value that changes when another vaule stops changing. It is very useful for search inputs where you don't want to react on every keystroke.

## Usage

```jsx
import useDebounce from "@clave/use-debounce";

const [value, setValue] = useState("");

const delayedValue = useDebounce(value, 500);
//delayedValue will only change when value has been unchanging for 500ms

// It's very useful for searchboxes where you want to wait until the user has stopped typing
useEffect(() => {
  search(delayedValue);
}, [delayedValue]);

<input onChange={setValue} value={value} />;
```
