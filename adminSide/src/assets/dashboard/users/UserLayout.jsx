import React, { useState } from "react";

import { Table } from "flowbite-react";
export default function UserLayout({ user }) {
  const handleEditClick = () => {
    localStorage.setItem("active", 2);
    localStorage.setItem("selectedUser", JSON.stringify(user));
    // relaods the page
    window.location.reload();
  };
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-base">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {user.name}
        </Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <button
            onClick={handleEditClick}
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Edit
          </button>
        </Table.Cell>
      </Table.Row>
    </>
  );
}
