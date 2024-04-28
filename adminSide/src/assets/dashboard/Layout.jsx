import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Dashboard from "./users/Dashboard";
import Users from "./users/Users";
import UserModel from "./model/UserModel";
import Category from "./category/Category";

export default function MainDashboard() {
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <UserModel />;
      case 3:
        return <Category />;
      case 4:
        return; //<Expense />;
      case 5:
        return; //<NotificationLayout />;
      default:
        return; // <Dashboard />;
    }
  };
  // Retrieve active state from local storage, default to 1 if not found
  const initialActive = localStorage.getItem("active") || 1;
  const [active, setActive] = useState(parseInt(initialActive));

  // Update local storage whenever active state changes
  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);
  return (
    <section className="bg-[#03d47c] max-h-screen flex">
      <SideBar active={active} setActive={setActive} />
      <main
        className="flex-grow rounded-lg  mt-2 mr-2 mb-2 overflow-y-scroll min-h-screen"
        style={{ scrollbarWidth: "none",background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,197,112,1) 35%, rgba(0,212,255,1) 100%)", }}
      >
        {displayData()}
      </main>
    </section>
  );
}
