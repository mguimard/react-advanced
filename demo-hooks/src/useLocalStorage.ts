import { useCallback, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: unknown) {
  const [state, setState] = useState(localStorage[key] || defaultValue);

  const updateValue = useCallback(
    (newValue: unknown) => {
      localStorage[key] = newValue;
      setState(newValue);
    },
    [key]
  );

  return [state, updateValue];
}
