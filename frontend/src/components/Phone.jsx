import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const Phone = ({id,phoneImages,phoneName,phoneBrand,phonePrice}) => {
  return (
    <Link to={`/phone-details/${id}`} >
      <div className='overflow-hidden flex flex-col p-2 px-4 text-mainColor shadow-md rounded-[20px] hover:scale-90 duration-500 transition-all ease-in-out'>
        <div className='flex justify-center'>
            <img src={phoneImages[0]} alt="" />
        </div>
        <p className='text-[22px] font-semibold'>{phoneName}</p>
        <div className='flex justify-between'>
            <div>
                <p className='uppercase'>{phoneBrand}</p>
            </div>
            <div className='flex gap-1 text-sm text-yellow-500'>
                <div>
                <FaStar />
                </div>
                <div>
                <FaStar />
                </div>
                <div>
                <FaStar />
                </div>
                <div>
                <FaStar />
                </div>
                <div>
                <FaRegStarHalfStroke />
                </div>
            </div>
        </div>
        <p className='text-[20px] font-semibold text-red-500'>Rs.{phonePrice}</p>
      </div>
    </Link>
  )
}

export default Phone
