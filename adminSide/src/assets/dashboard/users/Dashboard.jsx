import React, { useEffect } from "react";
import Header from "./Header";
import DashboardChart from "./DashboardCharts";
import Users from "./Users";
import { useGlobalContext } from "../../utils/globalContext";

export default function Dashboard() {
  const { getUsers, users } = useGlobalContext();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <main class="ease-soft-in-out  xl:ml-68.5 relative h-full  rounded-xl transition-all duration-200">
        <div class="w-full p-10 mx-auto">
          <Header />

          <DashboardChart />

          <div class="flex flex-wrap my-6 -mx-3">
            <div class="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
              <div class="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                  <div class="flex flex-wrap mt-0 -mx-3">
                    <div class="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                      <h6>Projects</h6>
                      <p class="mb-0 leading-normal text-sm">
                        <i class="fa fa-check text-cyan-500"></i>
                        <span class="ml-1 font-semibold">30 done</span>
                        this month
                      </p>
                    </div>
                    <div class="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                      <div class="relative pr-6 lg:float-right">
                        <a
                          dropdown-trigger
                          class="cursor-pointer"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v text-slate-400"></i>
                        </a>
                        <p class="hidden transform-dropdown-show"></p>

                        <ul
                          dropdown-menu
                          class="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                        >
                          <li class="relative">
                            <a
                              class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Action
                            </a>
                          </li>
                          <li class="relative">
                            <a
                              class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Another action
                            </a>
                          </li>
                          <li class="relative">
                            <a
                              class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                              href="javascript:;"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-auto p-1 px-0 pb-2">
                  <div class="overflow-x-auto">
                    <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead class="align-bottom">
                        <tr>
                          <th class="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Name
                          </th>
                          <th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Emails{" "}
                          </th>
                          <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => {
                          return <Users user={user} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
