import React, { useState } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
export default function Form() {
  const { addIncome, user, categories, sendNotification } = useGlobalContext();
  const [input, setInput] = useState({
    user_id: "",
    title: "",
    amount: "",
    date: "",
    category_id: "",
    description: "",
  });
  const { title, amount, date, category_id, description } = input;
  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value, user_id: user.id });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const incomeData = {
      ...input,
      amount: Number(input.amount), // convert amount to a number
    };
    console.log(incomeData);
    const success = await addIncome(incomeData);
    if (success) {
      createNotification(`${title} as Income was added`);
    }
    setInput({
      user_id: user.id,
      title: "",
      amount: "",
      date: "",
      category_id: "",
      description: "",
    });
  };
  const createNotification = (message) => {
    const notification = {
      user_id: user.id,
      message: message,
    };
    sendNotification(notification);
  };
  return (
    <section className=" flex-col  p-10 text-black bg-white ">
      <div className="header flex justify-center items-center my-2">
        <h1 className="font-protest-riot underline text-lg">
          Add <span className="text-[#03d47c] ">Income</span>
        </h1>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="md:p-4 md:space-y-4 space-y-2"
      >
        <div className="md:space-x-2">
          <label htmlFor="title">Title*</label>
          <input
            value={title}
            onChange={handleChange("title")}
            type="text"
            placeholder="Add Title"
            className="border border-[#03d47c] rounded-md p-1 "
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-4">
          <div>
            <label htmlFor="amount">Total*</label>
            <input
              value={amount}
              onChange={handleChange("amount")}
              type="number"
              placeholder="Add Amount"
              className="border border-[#03d47c]  rounded-md p-1"
            />
          </div>

          <div className="flex space-x-8 md:block md:space-x-0">
            <label htmlFor="date">Date*</label>
            <input
              value={date}
              onChange={handleChange("date")}
              type="date"
              placeholder="Add Date"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description*</label>
          <textarea
            value={description}
            onChange={handleChange("description")}
            name=""
            id=""
            cols="5"
            rows="2"
            className="border border-[#03d47c] rounded-md p-1"
          ></textarea>
        </div>

        <div className="md:space-x-4 flex">
          <label htmlFor="Category">Category*</label>
          <select
            required
            value={category_id}
            name="category_id"
            id="category_id"
            onChange={handleChange("category_id")}
          >
            <option value="" disabled>
              Select Option
            </option>
            {categories
              .filter((category) => category.type === "Income")
              .map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="text-sm flex justify-end items-end">
          <button className="bg-[#03d47c] py-2 px-4 rounded-md text-white font-medium">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
