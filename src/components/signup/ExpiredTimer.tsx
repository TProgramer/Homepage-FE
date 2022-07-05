import { useState, useEffect } from "react";

interface ExpiredTimerProps {
  expired: boolean;
  expiredTime: number;
  stopTimer: boolean;
  setIsRequested: (isRequested: boolean) => void;
}

const ExpiredTimer = ({
  expired,
  expiredTime,
  stopTimer,
  setIsRequested,
}: ExpiredTimerProps) => {
  const [remainTime, setRemainTime] = useState<number>(expiredTime);
  useEffect(() => {
    let timer: any;
    if (expired === false && !stopTimer) {
      timer = setInterval(() => {
        setRemainTime((remainTime) => remainTime - 1);
        if (remainTime === 0) {
          alert("시간초과");
          setIsRequested(false);
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [remainTime]);

  const minutes = Math.floor(remainTime / 60);
  const seconds = remainTime % 60;

  return (
    <div style={{ color: "white" }}>{`${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`}</div>
  );
};

export default ExpiredTimer;
