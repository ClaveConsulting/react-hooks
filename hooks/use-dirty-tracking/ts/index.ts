import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Track if one or more values have changed
 *
 * @param values The values to keep track of
 */
export default function useDirtyTracking(...values: unknown[]): [boolean, () => void] {
  const [original, setOriginal] = useState(values);

  const latest = useRef(values);
  useEffect(() => {
    latest.current = values;
  });

  const resetDirty = useCallback(() => setOriginal(latest.current), []);

  return [isDirty(original, values), resetDirty];
}

export function isDirty(a: unknown[], b: unknown[]){
  if(a.length !== b.length){
    return true;
  }

  for(let i=0; i<a.length; i++){
    if(!Object.is(a[i], b[i])) return true
  }

  return false;
}