import { act, renderHook } from "@testing-library/react-hooks";
import useArrayState from "./index";

test("initial value can be set", () => {
  const { result } = renderHook(() => useArrayState([]));

  const [value, setValue] = result.current;
  expect(value).toEqual([]);
});

test("value can be set", () => {
  const { result } = renderHook(() => useArrayState<string>([]));

  let [value, setValue] = result.current;
  act(() => setValue(["test"]));

  [value] = result.current;
  expect(value).toEqual(["test"]);
});

test("value can be appended", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.append("x"));

  [value] = result.current;
  expect(value).toEqual(["a", "b", "c", "x"]);
});

test("value can be prepended", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.prepend("x"));

  [value] = result.current;
  expect(value).toEqual(["x", "a", "b", "c"]);
});

test("value can be inserted", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.insert(2, "x"));

  [value] = result.current;
  expect(value).toEqual(["a", "b", "x", "c"]);
});

test("value can be removed", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.remove(1));

  [value] = result.current;
  expect(value).toEqual(["a", "c"]);
});

test("value can be replaced", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.replace(1, "x"));

  [value] = result.current;
  expect(value).toEqual(["a", "x", "c"]);
});

test("value can be edited", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.edit(1, (v) => v.toUpperCase()));

  [value] = result.current;
  expect(value).toEqual(["a", "B", "c"]);
});
