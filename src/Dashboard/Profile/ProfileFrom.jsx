    import React from "react";

    export default function ProfileFrom() {
        const userName = "Sher Muhammad"
        const userBio = "I am a full stack developer"
        const userPhoto = "https://randomuser.me/api/port"
        const userPassword = "********"

    return (
        <form action="" className=" flex flex-col items-center w-full rounded-md shadow-2xl px-20 py-2">
        <fieldset>
            <legend className="font-bold text-lg">Personal details</legend>
            <div className="flex flex-col justify-start space-y-2">
            <label htmlFor="name">Your name</label>
            <input
                type="text"
                placeholder="name"
                value={userName}
                className="w-56 p-2 rounded-md border-2 border-gray-200"
            />
            </div>
            <div className="flex flex-col justify-start space-y-2">
            <label htmlFor="name">Your Password</label>
            <input
                type="text"
                placeholder="name"
                value={userPassword}
                className="w-56 p-2 rounded-md border-2 border-gray-200"
            />
            </div>
            <div className="flex flex-col justify-start space-y-2">
            <label htmlFor="name">Profile Photo</label>
            <input
                type="file"
                className="w-56 p-2 rounded-md border-2 border-gray-200"
            />
            </div>
            <div className="flex flex-col justify-start space-y-2">
            <label htmlFor="name">Your Bio</label>
            <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="bio"
                userBio={userBio}
                value={userBio}
                className="w-56 p-2 rounded-md border-2 border-gray-200"
            ></textarea>
            </div>
        </fieldset>
        <div className="button my-4 flex justify-center items-center w-full">
            <button className="text-sm p-2 bg-[green] rounded-md text-white w-full">Update</button>
        </div>
        </form>
    );
    }
