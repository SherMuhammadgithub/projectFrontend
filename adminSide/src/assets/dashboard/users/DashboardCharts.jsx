import React from "react";

export default function DashboardChart() {
  return (
    <section>
      <div class="flex flex-wrap mt-6 -mx-3">
        <div class="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
          <div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div class="flex-auto p-4">
              <div class="py-4 pr-1 mb-4 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl">
                <div>
                  <canvas id="chart-bars" height="170"></canvas>
                </div>
              </div>
              <h6 class="mt-6 mb-0 ml-2">Active Users</h6>
              <p class="ml-2 leading-normal text-sm">
                (<span class="font-bold">+23%</span>) than last week
              </p>
            </div>
          </div>
        </div>
        <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
              <h6>Sales overview</h6>
              <p class="leading-normal text-sm">
                <i class="fa fa-arrow-up text-lime-500"></i>
                <span class="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div class="flex-auto p-4">
              <div>
                <canvas id="chart-line" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
