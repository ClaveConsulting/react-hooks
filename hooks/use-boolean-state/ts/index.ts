import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetBooleanState extends Dispatch<SetStateAction<boolean>> {
  toggle: () => void;
  toFalse: () => void;
  toTrue: () => void;
}

export default function useBooleanState(
  initial: boolean | (() => boolean) = false
): [boolean, SetBooleanState] {
  const [state, setState] = useState<boolean>(initial);

  const toggleState = useMemo(() => {
    const setValue = (v: SetStateAction<boolean>) => setState(v);
    setValue.toggle = () => setState((x) => !x);
    setValue.toFalse = () => setState(false);
    setValue.toTrue = () => setState(true);
    return setValue;
  }, []);

  return [state, toggleState];
}
