import React from "react";

function Header() {
  return (
    <div className="flex  justify-between  p-10">
      <h1 className="text-2xl font-semibold">
        Hello, <br />
        <span className="text-3xl">Employee 👋</span>
      </h1>
      <button className="mt-3 font-bold bg-red-600 h-fit py-2 px-3 rounded-md">
        Log out
      </button>
    </div>
  );
}

export default Header;
