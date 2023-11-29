import { useEffect, useRef } from "react";

interface UseIntervalProps {
  (callback: () => void, interval: number): void;
}

export const useInterval: UseIntervalProps = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};
