import React, { useEffect } from "react";
import { Table } from "flowbite-react";
import { useGlobalContext } from "../../utils/globalContext";
import UserLayout from "./UserLayout";
export default function Users() {
  const { users, getUsers } = useGlobalContext();
  // call getUsers function in useEffect
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <header className="space-y-3 m-5">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Kaushan Script" }}
        >
          All Users
        </h1>
        <p className="text-lg">See all Users here</p>
      </header>
      <div className="overflow-x-auto my-10 mx-28">
        <Table hoverable>
          <Table.Head className="text-lg">
            <Table.HeadCell>User Name</Table.HeadCell>
            <Table.HeadCell>User Email</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user) => {
              return <UserLayout key={user.id} user={user} />;
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
