# useDirtyTracking

> Track if one or more values have changed

[Documentation](https://claveconsulting.github.io/react-hooks/use-dirty-tracking)

```shell
npm install @clave/use-dirty-tracking
```

This hook will let you konw if values have changed. For example in a form you can enable the submit button if the values have changed.

## Usage

```jsx
import useDirtyTracking from "@clave/use-dirty-tracking";

const [value, setValue] = useState("original");

// supply one (or more) values to track
const [isDirty, resetDirty] = useDirtyTracking(value);

// isDirty === false

setValue("changed");

// isDirty === true

resetDirty();

// isDirty === false
```
