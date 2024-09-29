import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='pt-20 min-h-screen'>
      
      <form className='flex flex-col bg-white pt-6 pb-4 px-4 gap-3 max-w-[400px] mx-auto rounded-md'>
      <h1 className='text-2xl text-mainColor font-semibold mb-2'>Login to your Account</h1>
      <div className='font-medium flex flex-col gap-3'>
      <label htmlFor="email">
        <p className="text-[18px] text-mainColor ">Email:</p>
        <input
          type="email"
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded min-w-[350px] w-full mt-1 "
        />
      </label>
      <label htmlFor="password">
        <p className="text-[18px] text-mainColor ">Password:</p>
        <input
          type="password"
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
