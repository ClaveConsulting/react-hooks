import { act, renderHook } from "@testing-library/react-hooks";
import useObjectState from "./index";

test("initial value can be set", () => {
  const { result } = renderHook(() =>
    useObjectState({
      name: "Ada Lovelace",
      born: "December 10, 1815",
      died: "November 27, 1852",
      aged: 36,
    })
  );
  const [value] = result.current;
  expect(value).toEqual({
    name: "Ada Lovelace",
    born: "December 10, 1815",
    died: "November 27, 1852",
    aged: 36,
  });
});

test("setValue should change the value", () => {
  const { result } = renderHook(() =>
    useObjectState({
      name: "Ada Lovelace",
      born: "December 10, 1815",
      died: "November 27, 1852",
      aged: 36,
    })
  );
  let [value, setValue] = result.current;

  act(() =>
    setValue({
      name: "Grace Hopper",
      born: "December 9, 1906",
      died: "January 1, 1992",
      aged: 85,
    })
  );

  [value, setValue] = result.current;

  expect(value).toEqual({
    name: "Grace Hopper",
    born: "December 9, 1906",
    died: "January 1, 1992",
    aged: 85,
  });
});

test("setValue.set should update the key with the value", () => {
  const { result } = renderHook(() =>
    useObjectState({
      name: "Grace Hopper",
      born: "December 10, 1815",
      died: "November 27, 1852",
      aged: 36,
    })
  );
  let [value, setValue] = result.current;

  act(() => setValue.set("name", "Ada Lovelace"));

  [value, setValue] = result.current;

  expect(value).toEqual({
    name: "Ada Lovelace",
    born: "December 10, 1815",
    died: "November 27, 1852",
    aged: 36,
  });
});

test("setValue.with should update the key with the value", () => {
  const { result } = renderHook(() =>
    useObjectState({
      name: "Grace Hopper",
      born: "December 10, 1815",
      died: "November 27, 1852",
      aged: 36,
    })
  );
  let [value, setValue] = result.current;

  act(() =>
    setValue.with({
      name: "Ada Lovelace",
    })
  );

  [value, setValue] = result.current;

  expect(value).toEqual({
    name: "Ada Lovelace",
    born: "December 10, 1815",
    died: "November 27, 1852",
    aged: 36,
  });
});

test("setValue.edit should update the key with the value", () => {
  const { result } = renderHook(() =>
    useObjectState({
      name: "Ada Lovelace",
      born: "December 10, 1815",
      died: "November 27, 1852",
      aged: 36,
    })
  );
  let [value, setValue] = result.current;

  act(() => setValue.edit("name", (name) => name.toUpperCase()));

  [value, setValue] = result.current;

  expect(value).toEqual({
    name: "ADA LOVELACE",
    born: "December 10, 1815",
    died: "November 27, 1852",
    aged: 36,
  });
});

test("setValue.with should include values that are undefined", () => {
  const { result } = renderHook(() =>
    useObjectState({
      name: "Ada Lovelace",
      born: "December 10, 1815",
      died: "November 27, 1852",
      aged: 36,
    })
  );
  let [value, setValue] = result.current;

  act(() =>
    setValue.with({
      name: undefined,
    })
  );

  [value, setValue] = result.current;

  expect(value).toEqual({
    name: undefined,
    born: "December 10, 1815",
    died: "November 27, 1852",
    aged: 36,
  });
});
