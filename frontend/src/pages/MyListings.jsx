import React from 'react'
import phoneImg from '../assets/iPhone.png'
const MyListings = () => {
  return (
    <div className='min-h-screen px-4 sm:px-6 md:px-8 pt-6'>
      <h1 className="text-mainColor text-3xl font-semibold">
          My Listings
        </h1>

        <div className='hidden sm:grid border border-mainColor bg-secondaryColor text-sm lg:text-base text-lightColor font-semibold  lg:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_0.5fr]  sm:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_0.5fr] p-2 items-center mt-4'>
          <p className=''>Image</p>
          <p className=''>Phone Name</p>
          <p className=''>Phone Brand</p>
          <p className=''>Price</p>
          <p className=''>Status</p>
          <p className=''>Track Status</p>
          <p className=''>Remove</p>
        </div>

        <div className='border border-secondaryColor text-sm lg:text-base sm:grid lg:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_0.5fr] sm:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_0.5fr] p-2 sm:items-center mt-4 flex flex-col gap-1.5'>
          <img className='w-12' src={phoneImg} alt="Phone" />
          <p className='overflow-hidden text-secondaryColor'>iPhone 15 pro max</p>
          <p className='text-secondaryColor'>Apple</p>
          <p className='text-secondaryColor'>Rs.315000</p>
          <p className='text-secondaryColor'>Approved</p>
          <p className='text-secondaryColor bg-backgroundColor w-24 lg:w-28 text-center rounded-lg py-1 cursor-pointer'>Track Status</p>
          <p className='hidden sm:block text-secondaryColor cursor-pointer pl-4'>X</p>
          <p className='sm:hidden bg-red-400 text-lightColor w-24 text-center rounded-lg mt-2 py-1.5'>Delete Phone</p>
        </div>
    </div>
  )
}

export default MyListings
