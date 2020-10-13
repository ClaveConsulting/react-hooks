import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetObjectState<T> extends Dispatch<SetStateAction<T>> {
  set<K extends keyof T>(key: K, value: T[K]): void;
  with(v: Partial<T>): void;
  edit<K extends keyof T>(key: K, edit: (v: T[K]) => T[K]): void;
}

export default function useObjectState<T extends Record<string, unknown>>(
  initial: T | (() => T)
): [T, SetObjectState<T>] {
  const [state, setState] = useState<T>(initial);

  const setObjectState = useMemo(() => {
    const setValue = (v: SetStateAction<T>) => setState(v);

    setValue.set = <K extends keyof T>(key: K, value: T[K]) =>
      setState((x) => ({ ...x, [key]: value }));

    setValue.with = (v: Partial<T>) => setState((x) => ({ ...x, ...v }));

    setValue.edit = <K extends keyof T>(key: K, edit: (v: T[K]) => T[K]) =>
      setState((x) => ({ ...x, [key]: edit(x[key]) }));

    return setValue;
  }, []);

  return [state, setObjectState];
}
