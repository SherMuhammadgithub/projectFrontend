import React from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
import { notificationIcon } from "../GlobalData/Icons";

export default function Notification({
  message,
  createdAt,
  id,
  deleteNotification,
}) {
  const { user } = useGlobalContext();
  return (
    <li>
      <a
        href="#"
        class="items-center  p-3 flex hover:bg-gray-100  dark:hover:bg-gray-700"
      >
        <div class="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">{notificationIcon}</div>
        <div>
          <div class="text-lg font-normal text-gray-600 dark:text-gray-400">
            <span class="font-bold text-gray-900 dark:text-white ">
              {user.name}
            </span>{" "}
            - <span>Added Notification</span>{" "}
          </div>
          <span class="inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400 ">
            {message}
          </span>
          <div>{createdAt}</div>
        </div>
        <div
          onClick={() => deleteNotification(id)}
          className="ml-auto mr-8 font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Remove
        </div>
      </a>
    </li>
  );
}
