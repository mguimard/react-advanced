import { useEffect, useState } from "react";

function useTimer() {
  const [time, setTime] = useState(0);

  const [superiorTo100, setSup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev > 100) setSup(true);
        return prev + 1;
      });
    }, 10);

    if (superiorTo100) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [superiorTo100]);

  return time;
}

export default function Chronometre() {
  const time = useTimer();

  return (
    <>
      <p>Time {time}</p>
    </>
  );
}
