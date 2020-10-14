import { SetStateAction, useMemo, useState } from "react";

/**
 * Create a state for an array with useful array manipulation methods
 *
 * @param initial The initial array or factory function
 * @returns A pair of state and setState
 */
export default function useArrayState<T>(initial: T[] | (() => T[])) {
  const [state, setState] = useState<T[]>(initial);

  const setArrayState = useMemo(() => {
    const setValue = (v: SetStateAction<T[]>) => setState(v);

    /**
     * Appends a value to the end array
     * @param values One or more values to append to the array
     */
    setValue.append = (...values: T[]) => {
      setState((existing) => [...existing, ...values]);
    };

    /**
     * Inserts a value into the array at a specific position
     * @param index The position in which to insert the value
     * @param values One or more values to insert into the array
     */
    setValue.insertAt = (index: number, ...values: T[]) => {
      setState((existing) => {
        const changed = [...existing];
        changed.splice(index, 0, ...values);
        return changed;
      });
    };

    /**
     * Prepends a vaule to the beginning of the array
     * @param values One or more values to prepend to the array
     */
    setValue.prepend = (...values: T[]) => {
      setState((existing) => [...values, ...existing]);
    };

    /**
     * Removes the item at the specific index from the array
     * @param index The position of the item to remove
     */
    setValue.removeAt = (index: number) => {
      setState((existing) => existing.filter((_, i) => i !== index));
    };

    /**
     * Removes the specific value from the array
     *
     * This relies on strict equality, and will remove all
     * matching elements from the array
     * @param values One or more values to remove
     */
    setValue.remove = (...values: T[]) => {
      setState((existing) => existing.filter((v) => !values.includes(v)));
    };

    /**
     * Edits the element at a specific position in the array.
     * The second parameter is a function that receives the existing item
     * and returns the new item
     *
     * @param index The position in the array of the item to edit
     * @param edit The lambda function used to edit the item
     */
    setValue.editAt = (index: number, edit: (old: T) => T) => {
      setState((existing) =>
        existing.map((entry, i) => (i === index ? edit(entry) : entry))
      );
    };

    /**
     * Replaces the item at a position in the array with a new item
     * @param index The position in the array of the item to replace
     * @param value The new value to replace the old value with
     */
    setValue.replaceAt = (index: number, value: T) => {
      setState((existing) =>
        existing.map((entry, i) => (i === index ? value : entry))
      );
    };

    /**
     * Replaces (potentially several) items in the array with a new item
     *
     * @param oldValue The old value that should be replaced
     * @param newValue The new value to be used instead of the old value
     */
    setValue.replace = (oldValue: T, newValue: T) => {
      setState((existing) =>
        existing.map((entry) => (entry === oldValue ? newValue : entry))
      );
    };

    return setValue;
  }, []);

  return [state, setArrayState] as const;
}
