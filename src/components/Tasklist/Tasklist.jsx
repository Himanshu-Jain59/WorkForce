import React from "react";
function Tasklist() {
  return (
    <>
      <div className="flex-shrink-0 w-[30%] h-full bg-emerald-500 rounded-2xl p-5">
        <div className="flex justify-between mb-5 ">
          <h2 className="font-bold py-1 px-2 bg-red-600 rounded-md">High</h2>
          <h2 className="font-semibold rounded-md">22 March' 25</h2>
        </div>
        <h2 className="text-2xl font-bold mb-2">Make a nodejs project</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi
          ipsa illo incidunt facilis dolorum mollitia maxime, repudiandae iste
          iusto
        </p>
      </div>
    </>
  );
}

export default Tasklist;
