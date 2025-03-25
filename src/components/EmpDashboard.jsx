import React from "react";
import Header from "./Header";
import Accepttask from "./Taskcount/Accepttask";
import Newtask from "./Taskcount/Newtask";
import Completetask from "./Taskcount/Completetask";
import Failedtask from "./Taskcount/Failedtask";
import Tasklist from "./Tasklist/Tasklist";

function EmpDashboard({ data }) {
  return (
    <div className="w-screen bg-[#1c1c1c] h-screen">
      <Header data={data} />
      <div className="mx-10 flex justify-between gap-5">
        <Newtask data={data} />
        <Accepttask data={data} />
        <Completetask data={data} />
        <Failedtask data={data} />
      </div>
      <div id="tasklist" className=" m-10 overflow-x-scroll h-70 gap-5 flex">
        <Tasklist data={data} />
        <Tasklist data={data} />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
      </div>
    </div>
  );
}

export default EmpDashboard;
