import React, { useState } from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
const AllPhones = () => {

    const [showCategory,setShowCategory] = useState(false)

  return (
    <div className='text-mainColor'>
      {/* Filter Category */}
      <div className='pl-10 pt-10 w-[250px] '>
        <div className='border border-backgroundColor p-4'>
        <div onClick={()=> setShowCategory(prev => !prev)} className='flex gap-2 items-center '>
            <p className='font-semibold text-[20px]'>Filter Category</p>
            <div className={`text-mainColor text-lg ${showCategory?'':'-rotate-90'} sm:hidden`} >
            <FaArrowAltCircleDown />
            </div>
        </div>
        <div className={` ${showCategory?'flex':'hidden'} sm:flex mt-3 ml-3 flex flex-col gap-3`}>
            <label htmlFor="iPhone" className='flex items-center gap-2'>
                <input type="checkbox" id='iPhone' className='' />
                <p className='font-medium text-base'>iPhones</p>
            </label>
            <label htmlFor="samsung" className='flex items-center gap-2'>
                <input type="checkbox" id='samsung' className='' />
                <p className='font-medium text-base'>Samsung</p>
            </label>
            <label htmlFor="google" className='flex items-center gap-2'>
                <input type="checkbox" id='google' className='' />
                <p className='font-medium text-base'>Google</p>
            </label>
            <label htmlFor="xiaomi" className='flex items-center gap-2'>
                <input type="checkbox" id='xiaomi' className='' />
                <p className='font-medium text-base'>Xiaomi</p>
            </label>
            <label htmlFor="vivo" className='flex items-center gap-2'>
                <input type="checkbox" id='vivo' className='' />
                <p className='font-medium text-base'>Vivo</p>
            </label>
            <label htmlFor="oneplus" className='flex items-center gap-2'>
                <input type="checkbox" id='oneplus' className='' />
                <p className='font-medium text-base'>OnePlus</p>
            </label>
            <label htmlFor="oppo" className='flex items-center gap-2'>
                <input type="checkbox" id='oppo' className='' />
                <p className='font-medium text-base'>Oppo</p>
            </label>
            <label htmlFor="huawei" className='flex items-center gap-2'>
                <input type="checkbox" id='huawei' className='' />
                <p className='font-medium text-base'>Huawei</p>
            </label>
            <label htmlFor="nokia" className='flex items-center gap-2'>
                <input type="checkbox" id='nokia' className='' />
                <p className='font-medium text-base'>Nokia</p>
            </label>
            <label htmlFor="sony" className='flex items-center gap-2'>
                <input type="checkbox" id='sony' className='' />
                <p className='font-medium text-base'>Sony</p>
            </label>
            <label htmlFor="realme" className='flex items-center gap-2'>
                <input type="checkbox" id='realme' className='' />
                <p className='font-medium text-base'>Realme</p>
            </label>
        </div>
        </div>
      </div>

    {/* Showing all the Phones */}
    <div>
        
    </div>

    </div>
  )
}

export default AllPhones
