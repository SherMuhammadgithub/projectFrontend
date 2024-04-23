import React from "react";

export default function UserModel() {
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("selectedUser"));
  return (
    <>
      <header className="space-y-3 m-5">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Single User Preview
        </h1>
        <p className="text-lg">
          This is a single user page, view user's incomes, expenses and goals
          here
        </p>
      </header>

      <div className="text-4xl text-center">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
    </>
  );
}
