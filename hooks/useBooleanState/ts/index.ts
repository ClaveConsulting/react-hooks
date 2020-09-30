import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface SetBooleanState extends Dispatch<SetStateAction<boolean>> {
  toggle: () => void;
  false: () => void;
  true: () => void;
}

export default function useBooleanState(
  initial: boolean | (() => boolean) = false
): [boolean, SetBooleanState] {
  const [state, setState] = useState<boolean>(initial);

  const toggleState = useMemo(() => {
    const setValue = (v: SetStateAction<boolean>) => setState(v);
    setValue.toggle = () => setState((x) => !x);
    setValue.false = () => setState(false);
    setValue.true = () => setState(true);
    return setValue as SetBooleanState;
  }, []);

  return [state, toggleState];
}
