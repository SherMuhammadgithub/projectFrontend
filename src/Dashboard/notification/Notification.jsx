import React from "react";
import { useGlobalContext } from "../GlobalData/globalContext";

export default function Notification({ message, createdAt, id, deleteNotification }) {
  const { user } = useGlobalContext();
  return (
    <li>
      <a
        href="#"
        class="items-center  p-3 flex hover:bg-gray-100  dark:hover:bg-gray-700"
      >
        <img
          class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
          src="https://img.icons8.com/?size=80&id=xlaF32F7JR0P&format=png"
          alt="Bonnie Green image"
        />
        <div>
          <div class="text-lg font-normal text-gray-600 dark:text-gray-400">
            <span class="font-bold text-gray-900 dark:text-white ">
              {user.name}
            </span>{" "}
            - <span>Added Notification</span>{" "}
          </div>
          <span class="inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            {message}
          </span>
          <div>{createdAt}</div>
        </div>
        <div onClick={() => deleteNotification(id)} className="ml-auto mr-8 font-medium text-red-600 dark:text-red-500 hover:underline">
          Remove
        </div>
      </a>
    </li>
  );
}
