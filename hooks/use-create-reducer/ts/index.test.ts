import { act, renderHook } from "@testing-library/react-hooks";
import useCreateReducer, { createDispatcher, createReducer, infer } from "./index";

const reducers = infer<string>()({
  set(state, payload: string) {
    return payload;
  },
  toUpperCase(state) {
    return state.toUpperCase();
  },
  toLowerCase(state, payload?: string){
    return (payload ?? state).toLowerCase();
  },
  append(state, payload: number) {
    return state + payload;
  }
});

test('actions are created correctly', () => {
  const [, actions] = createReducer('', reducers);

  expect(actions.set('test')).toEqual({type: 'set', payload: 'test'});
  expect(actions.toUpperCase()).toEqual({type: 'toUpperCase'});
  expect(actions.toLowerCase()).toEqual({type: 'toLowerCase'});
  expect(actions.toLowerCase('TEST')).toEqual({type: 'toLowerCase', payload: 'TEST'});
  expect(actions.append(5)).toEqual({type: 'append', payload: 5});
});

test('dispatchers are created correctly', () => {
  const [, actions] = createReducer('', reducers);

  const spy = jest.fn();

  const dispatch = createDispatcher(actions, spy);

  dispatch.set('test');

  expect(spy).toHaveBeenCalledWith({type: 'set', payload: 'test'});

  dispatch.toUpperCase();

  expect(spy).toHaveBeenCalledWith({type: 'toUpperCase'});

  dispatch.append(5);

  expect(spy).toHaveBeenCalledWith({type: 'append', payload: 5});
});

test('reducer is created correctly', () => {
  const [reducer] = createReducer('', reducers);

  expect(reducer('', {type: 'set', payload: 'test'})).toBe('test');
  expect(reducer('test', {type: 'toUpperCase'})).toBe('TEST');
  expect(reducer('TEST', {type: 'toLowerCase', payload: undefined})).toBe('test');
  expect(reducer('TEST', {type: 'toLowerCase', payload: 'SOMETHING'})).toBe('something');
  expect(reducer('test', {type: 'append', payload: 5})).toBe('test5');
});

test("createReducer has initial state", () => {
  const { result } = renderHook(() => useCreateReducer('', reducers));

  const [state] = result.current;

  expect(state).toBe('');
});

test("createReducer updates state", () => {
  const { result } = renderHook(() => useCreateReducer('', reducers));

  let [state, dispatch] = result.current;

  expect(state).toBe('');

  act(() => dispatch.set('test'));

  [state, dispatch] = result.current;

  expect(state).toBe('test');

  act(() => dispatch.append(5));

  [state, dispatch] = result.current;

  expect(state).toBe('test5');

  act(() => dispatch.toUpperCase());

  [state, dispatch] = result.current;

  expect(state).toBe('TEST5');

  act(() => dispatch.toLowerCase());

  [state, dispatch] = result.current;

  expect(state).toBe('test5');

  act(() => dispatch.toLowerCase('SOMETHING'));

  [state, dispatch] = result.current;

  expect(state).toBe('something');
});