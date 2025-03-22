import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email:${email} and pwd: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="flex border-4 w-120 h-110 border-emerald-500 rounded-2xl items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="flex  flex-wrap flex-col gap-6 w-full mx-10"
        >
          <h1 className="text-2xl font-bold">Welcome</h1>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-lg border-2 rounded-2xl px-6 py-4 focus:outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-lg border-2 rounded-2xl px-6 py-4 focus:outline-none"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-2xl  rounded-full px-6 py-3 bg-emerald-600 cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
