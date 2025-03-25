import React from "react";

function Header({ data }) {
  console.log(data);
  return (
    <div className="flex  justify-between  p-10">
      <h1 className="text-2xl font-semibold">
        Hello, <br />
        <span className="text-3xl">{data.firstName} 👋</span>
      </h1>
      <button className="mt-3 text-xl font-semibold bg-red-600 h-fit p-3 rounded-md cursor-pointer">
        Log out
      </button>
    </div>
  );
}

export default Header;
