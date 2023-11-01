import React, { useState } from "react";

export const Counter = () => {
  const [state, setState] = useState(0);

  const increaseCount = () => {
    setState(state + 1);
  };
  const decreaseCount = () => {
    setState(state - 1);
  };

  return (
    <div>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <h1 placeholder="counter value">{state}</h1>
    </div>
  );
};

export default Counter;
