import { useEffect, useState } from "react";

/**
 * Returns the last stable value provided
 *
 * @param value Value that should be debounced
 * @param milliseconds Number of milliseconds to wait for the value to settle
 * @returns the last stable value provided
 */
export default function useDebounce<T>(value: T, milliseconds: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), milliseconds);

    return () => clearTimeout(handler);

  }, [value]);

  return debouncedValue;
}