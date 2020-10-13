import { act, renderHook } from "@testing-library/react-hooks";
import useBooleanState from "./index";

test("initial value by default is false", () => {
  const { result } = renderHook(() => useBooleanState());
  const [value, setValue] = result.current;
  expect(value).toBe(false);
});

test("initial value can be set", () => {
  const { result } = renderHook(() => useBooleanState(true));
  const [value, setValue] = result.current;
  expect(value).toBe(true);
});

test("setValue should change the value", () => {
  const { result } = renderHook(() => useBooleanState());
  let [value, setValue] = result.current;

  act(() => setValue(true));

  [value, setValue] = result.current;

  expect(value).toBe(true);
});

test("setValue.toFalse() should change the value", () => {
  const { result } = renderHook(() => useBooleanState(true));
  let [value, setValue] = result.current;

  act(() => setValue.toFalse());

  [value, setValue] = result.current;

  expect(value).toBe(false);
});

test("setValue.toTrue() should change the value", () => {
  const { result } = renderHook(() => useBooleanState(false));
  let [value, setValue] = result.current;

  act(() => setValue.toTrue());

  [value, setValue] = result.current;

  expect(value).toBe(true);
});

test("setValue.toggle() should toggle the value", () => {
  const { result } = renderHook(() => useBooleanState());
  let [value, setValue] = result.current;

  act(() => setValue.toggle());

  [value, setValue] = result.current;

  expect(value).toBe(true);
});

test("setValue.toggle() should toggle the value both ways", () => {
  const { result } = renderHook(() => useBooleanState());
  let [value, setValue] = result.current;

  act(() => setValue.toggle());
  act(() => setValue.toggle());

  [value, setValue] = result.current;

  expect(value).toBe(false);
});
