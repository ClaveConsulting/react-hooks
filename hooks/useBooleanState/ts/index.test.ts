import { renderHook } from "@testing-library/react-hooks";
import useBooleanState from "./index";

test("initial value by default is false", () => {
  const { result } = renderHook(() => useBooleanState());
  const [value, setValue] = result.current;
  expect(value).toBe(false);
});
