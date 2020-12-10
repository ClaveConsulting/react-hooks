import { renderHook } from "@testing-library/react-hooks";
import useCreateReducer from "./index";

test("test something here", () => {
  const { result } = renderHook(() =>
    useCreateReducer()
  );
  const value = result.current;
  expect(value).toBe("useCreateReducer");
});
