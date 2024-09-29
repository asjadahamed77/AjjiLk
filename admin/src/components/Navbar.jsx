import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' fixed top-0 right-0 left-0 flex justify-between px-8 sm:py-2 py-3 shadow-md bg-white'>
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
