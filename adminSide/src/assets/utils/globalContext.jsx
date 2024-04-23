import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const BASE_URL = "http://localhost:8000/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
 const  getUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-users`);
      console.log("I am running");
      setUsers(response.data);
    } catch (error) {
      console.log("sher Muhammad errror");
    }
  };
  // all functions and states here
  return (
    <GlobalContext.Provider
      value={{
        getUsers,
        users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
