import React, { useState } from 'react'
import { useGlobalContext } from './GlobalData/globalContext'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useGlobalContext();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = input;
  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    let success = await signUp(input);
    if (success) {
      navigate('/login'); // redirect to Login Page
    }
    setInput({
      name: '',
      email: '',
      password: ''
    });
  }
  return (
    <section className='mx-2 md:mx-32 animate__animated animate__bounceInLeft'>
    <h1 className='text-center text-7xl my-8' style={{fontFamily:'Kaushan Script'}}>USER SIGNUP</h1>
    <div className="container flex flex-col justify-center items-center md:flex-row-reverse">
<div className="img-container w-full flex justify-center items-center">

<img src="https://cdn-icons-gif.flaticon.com/14642/14642713.gif" alt="" />
</div>
<div className="w-full  flex flex-col justify-center items-center" >
<form className="bg-gray-200 shadow-md rounded px-16 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    Name
  </label>
  <input className="shadow appearance-none 
  border rounded w-full py-2 px-3 text-gray-700 
  leading-tight focus:outline-none focus:shadow-outline"
   id="username" type="text" placeholder="Username" value={name}
   onChange={handleChange('name')} />
</div>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    Email
  </label>
  <input className="shadow appearance-none 
  border rounded w-full py-2 px-3 text-gray-700 
  leading-tight focus:outline-none focus:shadow-outline"
   id="username" type="email" placeholder="Username" value={email}
   onChange={handleChange('email')} />
</div>
<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
    Password
  </label>
  <input className="shadow appearance-none border border-red-500 rounded
   w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
    focus:shadow-outline" id="password" type="password" placeholder="******************" value={password}
    onChange={handleChange('password')} />
  <p className="text-red-500 text-xs italic">Please choose a password.</p>
</div>    <div className="flex items-center justify-between">
  <button className="bg-[#07271f] hover:bg-b
lue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
    Sign Up
  </button>
</div>
</form>
<p className="text-center text-gray-500 text-xs">
&copy;2020 Xpense. All rights reserved.
</p>
</div>

</div>


</section>
  )
}
