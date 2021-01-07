import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetArrayState<T> extends Dispatch<SetStateAction<T[]>> {
  /**
   * Appends a value to the end array
   * @param value The value to append to the array
   */
  append(...values: T[]): void;

  /**
   * Inserts a value into the array at a specific position
   * @param index The position in which to insert the value
   * @param value The value to insert into the array
   */

  insertAt(index: number, ...values: T[]): void;

  /**
   * Prepends a vaule to the beginning of the array
   * @param value The vaule to prepend to the array
   */
  prepend(...values: T[]): void;

  /**
   * Removes the specific value from the array
   *
   * This relies on strict equality, and will remove all
   * matching elements from the array
   * @param value The value to remove
   */
  remove(...values: T[]): void;

  /**
   * Removes the item at the specific index from the array
   * @param index The position of the item to remove
   */
  removeAt(index: number): void;

  /**
   * Removes the items that match the filter test
   *
   * @param filter Test for which items to remove
   */
  removeWhere(filter: (value: T) => boolean): void;

  /**
   * Edits the element at a specific position in the array.
   * The second parameter is a function that receives the existing item
   * and returns the new item
   *
   * @param index The position in the array of the item to edit
   * @param edit The lambda function used to edit the item
   */
  editAt(index: number, edit: (old: T) => T): void;

  /**
   * Replaces the item at a position in the array with a new item
   * @param index The position in the array of the item to replace
   * @param value The new value to replace the old value with
   */
  replaceAt(index: number, value: T): void;

  /**
   * Replaces (potentially several) items in the array with a new item
   *
   * @param oldValue The old value that should be replaced
   * @param newValue The new value to be used instead of the old value
   */
  replace(oldValue: T, newValue: T): void;
}

/**
 * Create a state for an array with useful array manipulation methods
 *
 * @param initial The initial array or factory function
 * @returns A pair of state and setState
 */
export default function useArrayState<T>(initial: T[] | (() => T[])) {
  const [state, setState] = useState<T[]>(initial);

  const setArrayState = useMemo(() => {
    const setValue: SetArrayState<T> = (v: SetStateAction<T[]>) => setState(v);

    /**
     * Appends a value to the end array
     * @param values One or more values to append to the array
     */
    setValue.append = (...values: T[]) => {
      setState(append(...values));
    };

    /**
     * Inserts a value into the array at a specific position
     * @param index The position in which to insert the value
     * @param values One or more values to insert into the array
     */
    setValue.insertAt = (index: number, ...values: T[]) => {
      setState(insertAt(index, ...values));
    };

    /**
     * Prepends a vaule to the beginning of the array
     * @param values One or more values to prepend to the array
     */
    setValue.prepend = (...values: T[]) => {
      setState(prepend(...values));
    };

    /**
     * Removes the item at the specific index from the array
     * @param index The position of the item to remove
     */
    setValue.removeAt = (index: number) => {
      setState(removeAt(index));
    };

    /**
     * Removes the specific value from the array
     *
     * This relies on strict equality, and will remove all
     * matching elements from the array
     * @param values One or more values to remove
     */
    setValue.remove = (...values: T[]) => {
      setState(remove(values));
    };

    /**
     * Removes the items that match the filter test
     *
     * @param filter Test for which items to remove
     */
    setValue.removeWhere = (filter: (value: T) => boolean) => {
      setState(removeWhere(filter));
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
      setState(editAt(index, edit));
    };

    /**
     * Replaces the item at a position in the array with a new item
     * @param index The position in the array of the item to replace
     * @param value The new value to replace the old value with
     */
    setValue.replaceAt = (index: number, value: T) => {
      setState(replaceAt(index, value));
    };

    /**
     * Replaces (potentially several) items in the array with a new item
     *
     * @param oldValue The old value that should be replaced
     * @param newValue The new value to be used instead of the old value
     */
    setValue.replace = (oldValue: T, newValue: T) => {
      setState(replace(oldValue, newValue)
      );
    };

    return setValue;
  }, []);

  return [state, setArrayState] as const;
}

export function append<T>(...values: T[]): SetStateAction<T[]> {
  return (existing) => [...existing, ...values];
}

export function insertAt<T>(index: number, ...values: T[]): SetStateAction<T[]> {
  return (existing) => {
    const changed = [...existing];
    changed.splice(index, 0, ...values);
    return changed;
  };
}

export function prepend<T>(...values: T[]): SetStateAction<T[]> {
  return (existing) => [...values, ...existing];
}

export function removeAt<T>(index: number): SetStateAction<T[]> {
  return (existing) => existing.filter((_, i) => i !== index);
}

export function remove<T>(values: T[]): SetStateAction<T[]> {
  return (existing) => existing.filter((v) => !values.includes(v));
}

export function removeWhere<T>(filter: (value: T) => boolean): SetStateAction<T[]> {
  return (existing) => existing.filter((v) => !filter(v));
}

export function editAt<T>(index: number, edit: (old: T) => T): SetStateAction<T[]> {
  return (existing) => existing.map((entry, i) => (i === index ? edit(entry) : entry));
}

export function replaceAt<T>(index: number, value: T): SetStateAction<T[]> {
  return (existing) => existing.map((entry, i) => (i === index ? value : entry));
}

export function replace<T>(oldValue: T, newValue: T): SetStateAction<T[]> {
  return (existing) => existing.map((entry) => (entry === oldValue ? newValue : entry));
}