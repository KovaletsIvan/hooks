import React, { useState, useEffect } from "react";

import "./timer.scss";

const Clock = () => {
  const [time, setTime] = useState();

  const houers = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const setCorrectLength = (data) =>
    data.toString().length === 1 ? `0${data}` : data.toString();

  useEffect(() => {
    const timer = setInterval(
      () =>
        setTime(
          `${setCorrectLength(houers)}:${setCorrectLength(
            minutes
          )}:${setCorrectLength(seconds)}`
        ),
      1000
    );
    return () => clearInterval(timer);
  }, [time]);

  return <div className="timer">{time}</div>;
};

export default Clock;
