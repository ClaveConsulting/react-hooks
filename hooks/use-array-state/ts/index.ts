import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetArrayState<T> extends Dispatch<SetStateAction<T[]>> {
  append: (value: T) => void;
  insert: (index: number, value: T) => void;
  prepend: (value: T) => void;
  remove: (index: number) => void;
  edit: (index: number, edit: (old: T) => T) => void;
  replace: (index: number, value: T) => void;
}

export default function useArrayState<T>(
  initial: T[] | (() => T[])
): [T[], SetArrayState<T>] {
  const [state, setState] = useState<T[]>(initial);

  const setArrayState = useMemo<SetArrayState<T>>(() => {
    const setValue = (v: SetStateAction<T[]>) => setState(v);

    setValue.append = (value: T) => {
      setState((existing) => [...existing, value]);
    };

    setValue.insert = (index: number, value: T) => {
      setState((existing) => {
        const changed = [...existing];
        changed.splice(index, 0, value);
        return changed;
      });
    };

    setValue.prepend = (value: T) => {
      setState((existing) => [value, ...existing]);
    };

    setValue.remove = (index: number) => {
      setState((existing) => existing.filter((_, i) => i !== index));
    };

    setValue.edit = (index: number, edit: (old: T) => T) => {
      setState((existing) =>
        existing.map((entry, i) => (i === index ? edit(entry) : entry))
      );
    };

    setValue.replace = (index: number, value: T) => {
      setState((existing) =>
        existing.map((entry, i) => (i === index ? value : entry))
      );
    };

    return setValue;
  }, []);

  return [state, setArrayState];
}
