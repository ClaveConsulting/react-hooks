import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetArrayState<T> extends Dispatch<SetStateAction<T[]>> {
  append: (value: T) => void;
  insertAt: (index: number, value: T) => void;
  prepend: (value: T) => void;
  remove: (value: T) => void;
  removeAt: (index: number) => void;
  editAt: (index: number, edit: (old: T) => T) => void;
  replaceAt: (index: number, value: T) => void;
  replace: (oldValue: T, newValue: T) => void;
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

    setValue.insertAt = (index: number, value: T) => {
      setState((existing) => {
        const changed = [...existing];
        changed.splice(index, 0, value);
        return changed;
      });
    };

    setValue.prepend = (value: T) => {
      setState((existing) => [value, ...existing]);
    };

    setValue.removeAt = (index: number) => {
      setState((existing) => existing.filter((_, i) => i !== index));
    };

    setValue.remove = (value: T) => {
      setState((existing) => existing.filter((v) => v !== value));
    };

    setValue.editAt = (index: number, edit: (old: T) => T) => {
      setState((existing) =>
        existing.map((entry, i) => (i === index ? edit(entry) : entry))
      );
    };

    setValue.replaceAt = (index: number, value: T) => {
      setState((existing) =>
        existing.map((entry, i) => (i === index ? value : entry))
      );
    };

    setValue.replace = (oldValue: T, newValue: T) => {
      setState((existing) =>
        existing.map((entry) => (entry === oldValue ? newValue : entry))
      );
    };

    return setValue;
  }, []);

  return [state, setArrayState];
}
