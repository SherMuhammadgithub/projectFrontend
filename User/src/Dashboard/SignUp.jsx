import React, { useState } from "react";
import { useGlobalContext } from "./GlobalData/globalContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useGlobalContext();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, password } = input;

  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    console.log(input);
    const success = await signUp(input);
    if (success) {
      navigate("/login"); // redirect to home page
    }
    setLoading(false); // Set loading to false after the request is complete
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="flex flex-col-reverse md:flex-row max-h-screen bg-gray-200">
      <div className=" w-full  md:w-[50%] flex items-center justify-center">
        <div className="w-full md:w-[44%] p-12 md:pt-12 md:px-0">
          <Logo />
          <h1 className="text-3xl md:text-4xl font-bold text-An-600 text-center my-6">
            Welcome To Xpense
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold leading-tight mt-6 text-gray-800 text-center">
            Create your account
          </h2>
          <div className="mt-8 border border-gray-300 rounded-lg px-10 py-6">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  autoFocus
                  autoComplete="off"
                  required
                  value={name}
                  onChange={handleChange("name")}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  required
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  required
                  value={password}
                  onChange={handleChange("password")}
                />
              </div>
              <button
                type="submit"
                className={`w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 btn-hover btn-focus ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          </div>
          <p className="mt-8 text-gray-700 text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-500 hover:text-green-700 font-semibold"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block bg-gray-200 w-1/2 rounded-3xl overflow-hidden">
        <img
          src="https://cdn-icons-gif.flaticon.com/14642/14642713.gif"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
