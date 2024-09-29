import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between px-8 sm:py-2 py-3 shadow-md'>
      <div>
        <h1 className="text-2xl text-mainColor font-semibold">
          <Link to={"/"}>
            Ajji<span className="text-secondaryColor">-Lk</span> <span className='text-black  text-sm'>Admin Panel</span>
          </Link>
        </h1>
      </div>
      <button className="bg-transparent hover:text-lightColor hover:bg-mainColor ml-4 text-mainColor border-2 border-mainColor font-semibold px-3 rounded-full py-0.5">Logout</button>
    </div>
  )
}

export default Navbar
