"use client";

import React, { useState, useEffect } from "react";

export const Username = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    const { email, password } = loginData;
    if (email === "me@indrazm.com") {
      console.log("Email ditemukan");
    } else {
      console.log("Email ga ada bro!");
    }
  }, [loginData]);

  //Mount
  return (
    <div>
      <input name="email" value={loginData.email} onChange={handleChange} />
      <input name="password" value={loginData.password} type="password" onChange={handleChange} />
    </div>
  );
};
