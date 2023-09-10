"use client";

import { useState } from "react";

export const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <div className="text-4xl">Number: {number}</div>
      <div className="flex gap-4">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};
