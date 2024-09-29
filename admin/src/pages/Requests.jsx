import React from 'react'

const Requests = () => {
  return (
    <div >
      <div className='grid grid-cols-[1.5fr_2fr] max-w-[400px] border border-mainColor'>
        {/* Phone Name */}
        <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
            <p>Phone Name</p>
        </div>
        <div className='border border-mainColor pl-3 p-1 '>
            <p>iPhone 15 Pro max</p>
        </div>
        {/* Phone Brand */}
        <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
            <p>Phone Brand</p>
        </div>
        <div className='border border-mainColor pl-3 p-1'>
            <p>Apple</p>
        </div>
        {/* Phone Price */}
        <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
            <p>Phone Price</p>
        </div>
        <div className='border border-mainColor pl-3 p-1'>
            <p>Rs. 315000</p>
        </div>
        {/* Phone Storage */}
        <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
            <p>Phone Storage</p>
        </div>
        <div className='border border-mainColor pl-3 p-1'>
            <p>256 GB</p>
        </div>
        {/* Phone Condition */}
        <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
            <p>Phone Condition</p>
        </div>
        <div className='border border-mainColor pl-3 p-1'>
            <p>New</p>
        </div>
        {/* Phone Status */}
        <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
            <p>Status</p>
        </div>
        <select className='bg-transparent rounded pl-4 p-1 border border-mainColor'>
            <option value="">Pending</option>
            <option value="approve">Approve</option>
            <option value="remove">Remove</option>
        </select>
      </div>
    </div>
  )
}

export default Requests
