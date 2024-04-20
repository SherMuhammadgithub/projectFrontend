import React from "react";

export default function Notification() {
  return (
    <>
      <header className="flex justify-center items-center mt-4 md:mt-10">
        <h1 className="text-4xl" style={{ fontFamily: "Kaushan Script" }}>
          Notifications
        </h1>
      </header>
      <main className="recent-activity  flex justify-center items-center space-x-16 mb-4 relative ">
        <div class=" col01 p-5 w-full   border mx-16 md:mx-32 mb-10 md:my-10 border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <time class="text-lg flex justify-center items-center space-x-2 font-semibold text-gray-900 dark:text-white">
            <h1 className="text-center text-xl">Notifications</h1>
            <h1 className=" h-8 w-8 text-white bg-green-400 rounded-full flex justify-center items-center">
              4
            </h1>
          </time>

          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://img.icons8.com/?size=80&id=xlaF32F7JR0P&format=png"
                  alt="Bonnie Green image"
                />
                <div>
                  <div class="text-lg font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-bold text-gray-900 dark:text-white ">
                      Munees Tariq
                    </span>{" "}
                    - <span>Recated to your post</span>{" "}
                  </div>
                  <span class="inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, dolore!s
                  </span>
                  <div>1 min ago</div>
                </div>
              </a>
            </li>
            {/* nootofication 2 */}
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://img.icons8.com/?size=80&id=xlaF32F7JR0P&format=png"
                  alt="Bonnie Green image"
                />
                <div>
                  <div class="text-lg font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-bold text-gray-900 dark:text-white ">
                      Munees Tariq
                    </span>{" "}
                    - <span>Recated to your post</span>{" "}
                  </div>
                  <span class="inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, dolore!s
                  </span>
                  <div>1 min ago</div>
                </div>
              </a>
            </li>
            {/* 03 */}
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://img.icons8.com/?size=80&id=xlaF32F7JR0P&format=png"
                  alt="Bonnie Green image"
                />
                <div>
                  <div class="text-lg font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-bold text-gray-900 dark:text-white ">
                      Munees Tariq
                    </span>{" "}
                    - <span>Recated to your post</span>{" "}
                  </div>
                  <span class="inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, dolore!s
                  </span>
                  <div>1 min ago</div>
                </div>
              </a>
            </li>
            {/* 04 */}
            <li>
              <a
                href="#"
                class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                  src="https://img.icons8.com/?size=80&id=xlaF32F7JR0P&format=png"
                  alt="Bonnie Green image"
                />
                <div>
                  <div class="text-lg font-normal text-gray-600 dark:text-gray-400">
                    <span class="font-bold text-gray-900 dark:text-white ">
                      Munees Tariq
                    </span>{" "}
                    - <span>Recated to your post</span>{" "}
                  </div>
                  <span class="inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, dolore!s
                  </span>
                  <div>1 min ago</div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}
