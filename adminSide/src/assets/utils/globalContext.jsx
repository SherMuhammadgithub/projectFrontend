import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const BASE_URL = "http://localhost:8000/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [goals, setGoals] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-users`);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCategory = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addCategory = async (category) => {
    try {
      const response = await axios.post(`${BASE_URL}add-category`, category);
      if (response && response.data) alert("Category Added Successfully");
      getCategory();
    } catch (error) {
      console.log(error);
    }
  };
  const getIncome = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-income/${id}`);
      setIncomes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getExpense = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-expense/${id}`);
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGoals = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-goals/${id}`);
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getFeedback = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-feedback/${id}`);
      setFeedback(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-category/${id}`);
      if (response && response.data) alert("Category Deleted Successfully");
      getCategory();
    } catch (error) {
      console.log(error);
    }
  };
  // all functions and states here
  return (
    <GlobalContext.Provider
      value={{
        getUsers,
        users,
        addCategory,
        categories,
        getCategory,
        deleteCategory,
        getIncome,
        getExpense,
        getGoals,
        getFeedback,
        expenses,
        goals,
        feedback,
        incomes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
