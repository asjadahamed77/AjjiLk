import React, { useState } from 'react';
import sampleImage from '../assets/sampleImage.jpg';

const SellAPhone = () => {
  const [images, setImages] = useState([sampleImage, sampleImage, sampleImage, sampleImage]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = newImageURL;
        return newImages;
      });
    }
  };

  return (
    <div className='min-h-screen flex flex-col sm:pt-10 sm:pl-10 pt-8 pl-4 pb-6 text-mainColor font-medium'>
      <h1 className='text-2xl'>Sell your phone with Ajji-Lk</h1>
      <form className='flex flex-col gap-4 mt-4'>
        <label htmlFor="phoneImage">
          <p className='text-[18px]'>Phone Images:</p>
          <div className='flex gap-2 mt-2'>
            {images.map((image, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img
                  className='w-20 border rounded border-backgroundColor cursor-pointer'
                  src={image}
                    alt=''
                  onClick={() => document.getElementById(`imageInput${index}`).click()}
                />
                <input
                  id={`imageInput${index}`}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e, index)}
                />
              </div>
            ))}
          </div>
        </label>
        <label htmlFor="phoneName">
          <p className='text-[18px]'>Phone Name:</p>
          <input type="text" placeholder='Enter Here...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' required />
        </label>
        <label htmlFor="phoneBrand" className='inline-flex gap-2 items-center'>
          <p className='text-[18px]'>Phone Brand:</p>
          <select className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor' required>
            <option value="">Select Brand</option>
            <option value="iphone">iPhone</option>
            <option value="samsung">Samsung</option>
            <option value="google">Google</option>
            <option value="xiaomi">Xiaomi</option>
            <option value="vivo">Vivo</option>
            <option value="oneplus">OnePlus</option>
            <option value="oppo">Oppo</option>
            <option value="huawei">Huawei</option>
            <option value="nokia">Nokia</option>
            <option value="sony">Sony</option>
            <option value="realme">Realme</option>
          </select>
        </label>
        <label htmlFor="phoneStorage" className='inline-flex gap-2 items-center'>
          <p className='text-[18px]'>Phone Storage:</p>
          <select className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor' required>
            <option value="">Select Storage</option>
            <option value="32gb">32 GB</option>
            <option value="64gb">64 GB</option>
            <option value="128gb">128 GB</option>
            <option value="256gb">256 GB</option>
            <option value="512gb">512 GB</option>
            <option value="1tb">1 TB</option>
          </select>
        </label>
        <label htmlFor="phonePrice">
          <p className='text-[18px]'>Phone Price:</p>
          <input type="text" placeholder='Enter Here...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' required />
        </label>
        <label htmlFor="phoneCondition" className='inline-flex gap-2 items-center'>
          <p className='text-[18px]'>Phone Condition:</p>
          <select className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor' required>
            <option value="">Brand New / Used</option>
            <option value="brandnew">Brand New</option>
            <option value="used">Used</option>
          </select>
        </label>
        <label htmlFor="contactNumber">
          <p className='text-[18px]'>Phone Number:</p>
          <input type="number" placeholder='Enter Here...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' required />
        </label>
        <label htmlFor="phoneFeatures" className='flex flex-col'>
          <p className='text-[18px]'>Phone Features:</p>
          <input type="text" placeholder='Feature 1...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' />
          <input type="text" placeholder='Feature 2...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' />
          <input type="text" placeholder='Feature 3...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' />
          <input type="text" placeholder='Feature 4...' className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor' />
        </label>
        <button className='flex items-start px-4 py-1 bg-mainColor text-lightColor max-w-[170px] justify-center rounded-lg hover:opacity-85' type='submit'>
          SELL THIS PHONE
        </button>
      </form>
    </div>
  );
};

export default SellAPhone;
