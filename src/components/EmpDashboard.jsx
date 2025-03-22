import React from "react";
import Header from "./Header";
import Accepttask from "./Taskcount/Accepttask";
import Newtask from "./Taskcount/Newtask";
import Completetask from "./Taskcount/Completetask";
import Failedtask from "./Taskcount/Failedtask";
import Tasklist from "./Tasklist/Tasklist";

function EmpDashboard() {
  return (
    <div className="w-screen bg-[#1c1c1c] h-screen">
      <Header />
      <div className="mx-10 flex justify-between gap-5">
        <Newtask />
        <Accepttask />
        <Completetask />
        <Failedtask />
      </div>
      <div id="tasklist" className=" m-10 overflow-x-scroll h-70 gap-5 flex">
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
      </div>
    </div>
  );
}

export default EmpDashboard;
