import React, { useState } from "react";

export const Toggle = () => {
  const [state, setState] = useState<boolean>(true);
  const [value, setValue] = useState<string>("on");

  const toggle = () => {
    if (state === true) {
      setState(false);
      setValue("off");
    } else {
      setState(true);
      setValue("on");
    }
  };

  return (
    <div>
      <h1>Toggle on/off</h1>
      <button onClick={toggle} placeholder="toggleButton">
        {value}
      </button>
    </div>
  );
};

export default Toggle;
