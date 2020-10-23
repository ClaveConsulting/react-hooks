import { act, renderHook } from "@testing-library/react-hooks";
import useArrayState from "./index";

test("initial value can be set", () => {
  const { result } = renderHook(() => useArrayState([]));

  const [value] = result.current;
  expect(value).toEqual([]);
});

test("value can be set", () => {
  const { result } = renderHook(() => useArrayState<string>([]));

  let [value, setValue] = result.current;
  act(() => setValue(["test"]));

  [value, setValue] = result.current;
  expect(value).toEqual(["test"]);
});

test("value can be appended", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.append("x"));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "b", "c", "x"]);
});

test("several values can be appended", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.append("x", "y", "z"));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "b", "c", "x", "y", "z"]);
});

test("value can be prepended", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.prepend("x"));

  [value, setValue] = result.current;
  expect(value).toEqual(["x", "a", "b", "c"]);
});

test("value can be inserted", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.insertAt(2, "x"));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "b", "x", "c"]);
});

test("value can be removed", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.remove("b"));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "c"]);
});

test("value can be removedAt", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.removeAt(1));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "c"]);
});

test("value can be replacedAt", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.replaceAt(1, "x"));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "x", "c"]);
});

test("value can be replaced", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.replace("b", "x"));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "x", "c"]);
});

test("value can be edited", () => {
  const { result } = renderHook(() => useArrayState<string>(["a", "b", "c"]));

  let [value, setValue] = result.current;
  act(() => setValue.editAt(1, (v) => v.toUpperCase()));

  [value, setValue] = result.current;
  expect(value).toEqual(["a", "B", "c"]);
});
