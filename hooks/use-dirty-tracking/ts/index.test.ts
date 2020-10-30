/* eslint-disable prefer-const */
import { act, renderHook } from '@testing-library/react-hooks';
import useDirtyTracking from './index';

test('should initially be clean', () => {
  const { result } = renderHook(() => useDirtyTracking('something'));

  const [dirty] = result.current;

  expect(dirty).toBeFalsy();
});
test('should initially be clean with multiple values', () => {
  const { result } = renderHook(() => useDirtyTracking(5, 'test'));

  const [dirty] = result.current;

  expect(dirty).toBeFalsy();
});

test('should be dirty when the value changes', () => {
  let value = 5;
  const { result, rerender } = renderHook(() => useDirtyTracking(value));

  let [dirty] = result.current;
  expect(dirty).toBeFalsy();

  value = 10;
  rerender();

  [dirty] = result.current;
  expect(dirty).toBeTruthy();
});

test('should be dirty when one value changes', () => {
  let value1 = 5;
  const value2 = 'test';
  const { result, rerender } = renderHook(() => useDirtyTracking(value1, value2));

  let [dirty] = result.current;
  expect(dirty).toBeFalsy();

  value1 = 10;
  rerender();

  [dirty] = result.current;
  expect(dirty).toBeTruthy();
});

test('should be dirty when number of items decreases', () => {
  let list = [5, 'test'];
  const { result, rerender } = renderHook(() => useDirtyTracking(...list));

  let [dirty] = result.current;
  expect(dirty).toBeFalsy();

  list = [5];
  rerender();

  [dirty] = result.current;
  expect(dirty).toBeTruthy();
});

test('should be dirty when number of items increases', () => {
  let list = [5, 'test'] as unknown[];
  const { result, rerender } = renderHook(() => useDirtyTracking(...list));

  let [dirty] = result.current;
  expect(dirty).toBeFalsy();

  list = [5, 'test', true];
  rerender();

  [dirty] = result.current;
  expect(dirty).toBeTruthy();
});

test('should be clean when resetDirty has been called', () => {
  let value1 = 5;
  const value2 = 'test';
  const { result, rerender } = renderHook(() => useDirtyTracking(value1, value2));

  let [dirty, resetDirty] = result.current;
  expect(dirty).toBeFalsy();

  value1 = 10;
  rerender();

  [dirty, resetDirty] = result.current;
  expect(dirty).toBeTruthy();

  act(() => {
    resetDirty();
  });

  [dirty, resetDirty] = result.current;
  expect(dirty).toBeFalsy();
});

test('should be clean when an old resetDirty has been called', () => {
  let value1 = 5;
  const value2 = 'test';
  const { result, rerender } = renderHook(() => useDirtyTracking(value1, value2));

  let [dirty, resetDirty] = result.current;
  expect(dirty).toBeFalsy();

  value1 = 10;
  rerender();

  [dirty] = result.current;
  expect(dirty).toBeTruthy();

  act(() => {
    resetDirty();
  });

  [dirty] = result.current;
  expect(dirty).toBeFalsy();
});