import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [curDate, setCurDate] = useState(new Date());

  const tick = () => {
    setCurDate(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 placeholder="clock value">{curDate.toLocaleString()}</h1>
    </div>
  );
};

export default Clock;
