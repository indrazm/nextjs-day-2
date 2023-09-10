"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = () => {
    setLoading(true);
    const { email, password } = loginData;

    if (email !== "admin@web.com" && password !== "admin") {
      console.log("Email dan passwordnya salah!");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="space-y-4">
      <div>
        <h2>Login</h2>
        <p>Sign in to your account</p>
      </div>
      <div className="space-y-2">
        <input value={loginData.email} name="email" onChange={handleChange} placeholder="email@something.com" type="email" />
        <input value={loginData.password} name="password" onChange={handleChange} placeholder="password" type="password" />
        <button disabled={loading} onClick={handleSubmitLogin}>
          {loading ? "Loading" : "Login"}
        </button>
      </div>
    </div>
  );
};
