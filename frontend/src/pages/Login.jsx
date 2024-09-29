import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import backendUrl from '../helpers/backendUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const {  email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/");  
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
     
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      console.error(errorMessage);
    }
  }
  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])
  return (
    <div className='pt-20 min-h-screen'>
      
      <form onSubmit={submitHandler} className='flex flex-col bg-white pt-6 pb-4 px-4 gap-3 max-w-[400px] mx-auto rounded-md'>
      <h1 className='text-2xl text-mainColor font-semibold mb-2'>Login to your Account</h1>
      <div className='font-medium flex flex-col gap-3'>
      <label>
        <p className="text-[18px] text-mainColor ">Email:</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded min-w-[350px] w-full mt-1 "
        />
      </label>
      <label>
        <p className="text-[18px] text-mainColor ">Password:</p>
        <input
          type="password"
          name="password"
              value={password}
              onChange={handleInputChange}
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded min-w-[350px] w-full mt-1 "
        />
      </label>

      <button type="submit" className="bg-backgroundColor text-mainColor font-semibold py-2 my-2 rounded w-40 border hover:opacity-85">CREATE ACCOUNT</button>
      <hr />
    <div className='flex text-secondaryColor justify-center gap-2'>
    Do not have an Account? <Link className='text-mainColor underline' to={'/signup'}>Click here</Link>
    </div>
      </div>
      </form>
    </div>
  )
}

export default Login
