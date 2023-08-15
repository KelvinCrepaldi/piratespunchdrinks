import React, { useEffect, useState } from "react";

interface ICountdownProps {
  endDate: string;
}

export const Countdown = ({
  endDate,
  ...props
}: ICountdownProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const targetDate = new Date(endDate).getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <span className="text-pirates-gold font-fredericka text-2xl pr-2">
      {timeLeft.days > 0 && <span className="mx-2">{timeLeft.days} dias</span>}
      {timeLeft.hours > 0 && <span>{timeLeft.hours}:</span>}
      {timeLeft.minutes > 0 && <span>{timeLeft.minutes}:</span>}
      {timeLeft.seconds > 0 && <span>{timeLeft.seconds}</span>}

      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && <span>Time{"'"}s up!</span>}
    </span>
  );
};
