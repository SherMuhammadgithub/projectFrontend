import React, { useEffect } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
import Notification from "./Notification";
import { dateFormat } from "../GlobalData/dateFormat";

export default function NotificationLayout() {
  const { getNotification, notification, deleteNotification } =
    useGlobalContext();
  useEffect(() => {
    getNotification();
  }, []);
  return (
    <section section className="animate__animated animate__fadeIn">
       <header className="space-y-3 m-5">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Your Notifications
        </h1>
        <p className="text-lg">See your Notifications here 😃</p>
      </header>
      <main className="recent-activity  flex justify-center items-center space-x-16 mb-4 ">
        <div
          class=" col01 p-5 w-full bg-gray-100 h-[30rem] overflow-y-scroll  border mx-16 md:mx-32 mb-10 md:my-10 border-gray-100 rounded-lg bg-gray dark:bg-gray-800 dark:border-gray-700"
          style={{ scrollbarWidth: "none" }}
        >
          <time class="text-lg flex justify-center relative items-center space-x-2 font-semibold text-gray-900 dark:text-white">
            <h1 className="text-center text-xl">Notification</h1>
            <h1 className=" h-6 w-6 absolute bottom-2 right-[26rem] text-white text-xs bg-green-400 rounded-full flex justify-center items-center">
              {notification.length}
            </h1>
          </time>

          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            {notification.map((item) => {
              return (
                <Notification
                  message={item.message}
                  createdAt={dateFormat(item.createdAt)}
                  deleteNotification={deleteNotification}
                  id={item.id}
                />
              );
            })}
          </ol>
        </div>
      </main>
    </section>
  );
}
