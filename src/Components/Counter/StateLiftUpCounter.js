// 5. **State Lift-Up**:
//    Create two sibling components, `Incrementor` and `DisplayCounter`. `Incrementor` should have
//    a button to increment a count value, and `DisplayCounter` should display this count value.
//    Implement state lift-up so that both components share the same count state, with `Incrementor`
//    modifying it and `DisplayCounter` displaying it.

import React, { useState } from "react";

const Incrementor = ({ onIncrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Incrementor</button>
    </div>
  );
};

const DisplayCounter = ({ count }) => {
  return (
    <div>
      <h4>Counter Value: {count}</h4>
    </div>
  );
};

const StateLiftUpCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Incrementor onIncrement={handleClick} />
      <DisplayCounter count={count} />
    </div>
  );
};

export default StateLiftUpCounter;
