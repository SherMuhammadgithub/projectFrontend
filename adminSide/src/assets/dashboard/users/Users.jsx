import React from "react";

export default function Users({ user }) {
  const handleEditClick = () => {
    localStorage.setItem("active", 2);
    localStorage.setItem("selectedUser", JSON.stringify(user));
    // relaods the page
    window.location.reload();
  };
  return (
    <tr>
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
        <div class="flex px-2 py-1">
          <div class="flex flex-col justify-center">
            <h6 class="mb-0 leading-normal text-sm">{user.name}</h6>
          </div>
        </div>
      </td>
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
        <div class="mt-2 avatar-group">
          <div class="flex flex-col justify-center">
            <h6 class="mb-0 leading-normal text-sm">{user.email}</h6>
          </div>
        </div>
      </td>
      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
        <div class="mt-2 avatar-group">
          <div class="flex flex-col justify-center w-full px-6">
            <button
              class="btn mb-0 leading-normal text-sm"
              onClick={handleEditClick}
            >
              View
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
