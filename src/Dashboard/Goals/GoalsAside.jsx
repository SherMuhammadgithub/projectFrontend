import React from "react";

export default function GoalsAside() {
  const totalGoals = 0;
  return (
    <aside>
      <div className="container border-2 shadow-2xl  bg-white border-gray-300 rounded-md p-6 w-[30rem] h-80">
        <div className="header my-4 text-center relative">
          <h1 className="text-xl font-bold">Total Goals</h1>
          <div className="absolute bottom-4  right-36 h-6 w-6 text-xs rounded-full bg-green-500 text-white flex justify-center items-center">{totalGoals}</div>
        </div>
        <div className="grid-container mx-5 my-5 grid grid-cols-2 gap-2 place-items-center text-white">
          <div className="item-1 p-4 w-48 border bg-green-500 border-gray-300 rounded-md shadow-2xl">
            <h3 className="text-lg font-semibold">On Track</h3>
            <p>Goal 1 description</p>
          </div>
          <div className="item-2 p-4 w-48 bg-blue-500  border border-gray-300 rounded-md shadow-2xl">
            <h3 className="text-lg font-semibold">Off Track</h3>
            <p>Goal 2 description</p>
          </div>
          <div className="item-3 p-4 w-48 bg-red-500  border border-gray-300 rounded-md shadow-2xl">
            <h3 className="text-lg font-semibold">At Risk</h3>
            <p>Goal 3 description</p>
          </div>
          <div className="item-4 p-4 w-48 bg-gray-400  border border-gray-300 rounded-md shadow-2xl">
            <h3 className="text-lg font-semibold">Closed</h3>
            <p>Goal 4 description</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
