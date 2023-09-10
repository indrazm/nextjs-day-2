"use client";

import { useEffect, useState } from "react";
import Randomstring from "randomstring";

export const PasswordGen = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleGeneratePassword = () => {
    const pass = Randomstring.generate(7);
    setPassword(pass);
  };

  useEffect(() => {
    if (password !== "") {
      setMessage("New password generated");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }, [password]);

  return (
    <div>
      <div>{password}</div>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <div>{message !== "" ? message : ""}</div>
    </div>
  );
};
