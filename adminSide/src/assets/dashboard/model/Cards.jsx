import React from "react";

export default function Cards() {
  return (
    <div className="cards-container flex space-x-10 my-4   flex-wrap justify-center items-center w-full">
      <div class=" card-1 div h-[10em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-2 z-0">
        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
          Total Incomes
        </h1>
        <div>amount</div>
      </div>

      <div class=" card-2 div h-[10em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-2 z-0">
        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <button class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
          <span class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
            More Info
          </span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
          HEADING
        </h1>
      </div>

      <div class=" card-3 div h-[10em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-2 z-0">
        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <button class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
          <span class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
            More Info
          </span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
          HEADING
        </h1>
      </div>
    </div>
  );
}
