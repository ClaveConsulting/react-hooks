import { Dispatch, useMemo, useReducer } from 'react';

/**
 * Useful method for getting correct types in TypeScript. Does nothing
 */
export function infer<S>() {
  return <R extends ReducerDict<S>>(reducers: R): R => reducers;
}

export function withMiddleware<S, R extends ReducerDict<S>>(reducers: R, ...middlewares: ((state: S) => S)[]): R {
  return Object.fromEntries(
    Object.entries(reducers)
    .map(([type, reducer]) => ([type, (...args) => middlewares.reduce((s, m) => m(s), reducer(...args))]))
  ) as R;
}

/**
 * Creates a strongly typed reducer with a limited specific dispatcher
 * @param initialState the initial state of the reducers
 * @param reducers an object of reducer methods
 */
export default function useCreateReducer<S, R extends ReducerDict<S>>(
  initialState: S,
  reducers: R
): [S, Dispatcher<R>] {
  const [reducer, actions] = useMemo(
    () => createReducer(initialState, reducers),
    []
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = useMemo(() => createDispatcher(actions, dispatch), []);

  return [state, dispatcher];
}

export type Actions<R extends ReducerDict> = {
  [k in Extract<keyof R, string>]: R[k] extends PayloadReducer
    ? () => PayloadlessAction<k>
    : R[k] extends PayloadReducer<any, infer P | undefined>
    ? (payload?: P) => PayloadAction<k, P>
    : R[k] extends PayloadReducer<any, infer P>
    ? (payload: P) => PayloadAction<k, P>
    : never;
};

export interface PayloadAction<T extends string, P>
  extends PayloadlessAction<T> {
  readonly payload: P;
}
export interface PayloadOptionalAction<T extends string, P>
  extends PayloadlessAction<T> {
  readonly payload?: P;
}

export interface PayloadlessAction<T extends string> {
  readonly type: T;
}

export type Reducer<S, R extends ReducerDict> = (
  state: S,
  action: ExtractActions<R>
) => S;

export type PayloadReducer<S = any, P = unknown> = (state: S, payload: P) => S;

export type ReducerDict<S = any> = {
  [T: string]: PayloadReducer<S, any>;
};

export type ExtractActions<R extends ReducerDict> = keyof R extends infer T
  ? T extends Extract<keyof R, string>
    ? R[T] extends PayloadReducer
      ? PayloadlessAction<T>
      : R[T] extends PayloadReducer<any, infer P | undefined>
      ? PayloadOptionalAction<T, P>
      : R[T] extends PayloadReducer<any, infer P>
      ? PayloadAction<T, P>
      : never
    : never
  : never;

export type Dispatcher<R extends ReducerDict> = {
  [T in Extract<keyof R, string>]: R[T] extends PayloadReducer
    ? () => void
    : R[T] extends PayloadReducer<any, infer P | undefined>
    ? (payload?: P) => void
    : R[T] extends PayloadReducer<any, infer P>
    ? (payload: P) => void
    : never;
};

export function createReducer<S, R extends ReducerDict<S>>(
  initialState: S,
  reducers: R
): readonly [Reducer<S, R>, Actions<R>] {
  const reducer = (state: S, action: any) =>
    reducers[action.type]?.(state, action.payload) ?? state;

  const actions = Object.fromEntries(
    Object.keys(reducers).map((type) => [
      type,
      (payload: any) => ({ type, payload })
    ])
  ) as any;
  return [reducer, actions];
}

export function createDispatcher<R extends ReducerDict>(
  actions: Actions<R>,
  dispatch: Dispatch<ExtractActions<R>>
): Dispatcher<R> {
  return Object.fromEntries(
    Object.entries(actions).map(([type, func]) => [
      type,
      (payload: unknown) => dispatch((func as any)(payload))
    ])
  ) as any;
}
