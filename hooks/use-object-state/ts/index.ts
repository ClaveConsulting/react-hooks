import { SetStateAction, useMemo, useState } from "react";

/**
 * Create a state for an object with useful array manipulation methods
 *
 * @param initial The initial object or factory function
 * @returns A pair of state and setState
 */
export default function useObjectState<T extends Record<string, unknown>>(
  initial: T | (() => T)
) {
  const [state, setState] = useState<T>(initial);

  const setObjectState = useMemo(() => {
    const setValue = (v: SetStateAction<T>) => setState(v);

    /**
     * Sets the property of key to value in the object
     * @param key The object key to set the value of
     * @param value The value to set
     */
    setValue.set = <K extends keyof T>(key: K, value: T[K]) =>
      setState((x) => ({ ...x, [key]: value }));

    /**
     * Sets several properties in the object
     * @param v An object with several properties to set
     */
    setValue.with = (v: Partial<T>) => setState((x) => ({ ...x, ...v }));

    /**
     * Edit a property in the object
     * @param key The key of the object to edit
     * @param edit A method that receives the old property value and will return the new value
     */
    setValue.edit = <K extends keyof T>(key: K, edit: (v: T[K]) => T[K]) =>
      setState((x) => ({ ...x, [key]: edit(x[key]) }));

    return setValue;
  }, []);

  return [state, setObjectState] as const;
}
