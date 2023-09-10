"use client";

import { useState } from "react";

export const Card = () => {
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  // namaState
  // setNamaState

  const addToState = () => {
    setState(state + 1);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* <div>Number = {state}</div>
      <button onClick={addToState}>Add 1</button> */}
      <div>Name : {name}</div>
      <input onChange={changeName} className="border-2 p-2" />
    </div>
  );
};
