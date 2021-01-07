import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetBooleanState extends Dispatch<SetStateAction<boolean>> {
  /**
   * Toggle the boolean value
   */
  toggle: () => void;

  /**
   * Set the boolean value to false
   */
  toFalse: () => void;

  /**
   * Set the boolean value to true
   */
  toTrue: () => void;
}

/**
 * Create a state for a boolean value with useful methods
 *
 * @param initial The initial value or factory function, defaults to false
 * @returns A pair of state and setState
 */
export default function useBooleanState(
  initial: boolean | (() => boolean) = false
) {
  const [state, setState] = useState<boolean>(initial);

  const setBooleanState = useMemo(() => {
    const setValue: SetBooleanState = (v: SetStateAction<boolean>) => setState(v);

    /**
     * Toggle the boolean value
     */
    setValue.toggle = () => setState((x) => !x);

    /**
     * Set the boolean value to false
     */
    setValue.toFalse = () => setState(false);

    /**
     * Set the boolean value to true
     */
    setValue.toTrue = () => setState(true);

    return setValue;
  }, []);

  return [state, setBooleanState] as const;
}
