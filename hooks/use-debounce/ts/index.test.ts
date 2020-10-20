import { renderHook } from '@testing-library/react-hooks';
import useDebounce from './index';

test('should have initial value', () => {
  const { result } = renderHook(() => useDebounce(5, 100));

  expect(result.current).toBe(5);
});

test('should not update immediately', () => {
  let value = 5;
  const { result, rerender } = renderHook(() => useDebounce(value, 100));

  expect(result.current).toBe(5);

  value = 10;
  rerender();

  expect(result.current).toBe(5);
});

test('should update after a small delay', async () => {
  let value = 5;
  const { result, rerender, waitForNextUpdate } = renderHook(() => useDebounce(value, 100));

  expect(result.current).toBe(5);

  value = 10;
  rerender();

  expect(result.current).toBe(5);

  await waitForNextUpdate();
  expect(result.current).toBe(10);
});

test('should use the latest value', async () => {
  let value = 5;
  const { result, rerender, waitForNextUpdate } = renderHook(() => useDebounce(value, 100));

  expect(result.current).toBe(5);

  for (value; value <= 10; value++) {
    await delay(50)
    rerender();
  }

  expect(result.current).toBe(5);

  await waitForNextUpdate();
  expect(result.current).toBe(10);
});

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}