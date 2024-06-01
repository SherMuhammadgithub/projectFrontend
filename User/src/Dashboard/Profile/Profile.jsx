import React from "react";
import ProfileFrom from "./ProfileFrom";
import ProfileAside from "./ProfileAside";
export default function Profile() {
  return (
    <main className="p-10  animate__animated animate__fadeIn">
      <header className="space-y-3">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Your Profile
        </h1>
        <p className="text-lg">Update your photo and personal details here</p>
      </header>
      <div className="container my-10 flex justify-center items-center w-full space-y-6 space-x-0 md:space-y-0 md:space-x-10">
        <div className="aside-content hidden md:block">
          <ProfileAside />
        </div>

        <div className="profile-form">
          <ProfileFrom />
        </div>
      </div>
    </main>
  );
}
