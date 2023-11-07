import React, { useEffect, useState } from "react";

export const Clock = () => {
  let date = new Date();
  let [curDate, setCurDate] = useState(new Date());

  const tick = () => {
    setCurDate(new Date());
  };

  useEffect(() => {
    tick();
  });

  return (
    <div>
      <h1 placeholder="clock value">{curDate.toLocaleString()}</h1>
    </div>
  );
};

export default Clock;
