import React from "react";

function CreateTask() {
  return (
    <div className=" mx-10 py-5 bg-[#1c1c1c] rounded-xl">
      <h1 className="ml-[40%] font-semibold text-3xl ">Create a Task</h1>
      <form className="flex  gap-5 px-10 py-5">
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-medum ml-1 mb-2">Task Title</h3>
            <input
              className="text-lg text-left border-2 rounded-lg px-5 w-3/4 py-1 focus:outline-none"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-xl font-medum ml-1 mb-2">Date</h3>
            <input
              className="text-lg text-left border-2 rounded-lg px-5 w-3/4 py-1 focus:outline-none"
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div>
            <h3 className="text-xl font-medum ml-1 mb-2">Assign To</h3>
            <input
              className="text-lg text-left border-2 rounded-lg px-5 w-3/4 py-1 focus:outline-none"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-xl font-medum ml-1 mb-2">Category</h3>
            <input
              className="text-lg text-left border-2 rounded-lg px-5 w-3/4 py-1 focus:outline-none"
              type="text"
              placeholder="design,dev,etc."
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div>
            <h3 className="text-xl font-medum ml-1 mb-2">Description</h3>
            <textarea
              className="text-lg text-left border-2 rounded-lg px-5 w-full py-1 h-60 focus:outline-none resize-none"
              type="text"
            />
            <button className="mt-6 bg-emerald-500 rounded-lg w-full p-3 font-semibold text-2xl cursor-pointer">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
