import React, { useContext, useState } from 'react';
import axios from 'axios';
import sampleImage from '../assets/sampleImage.jpg';
import backendUrl from '../helpers/backendUrl';
import {toast} from 'react-toastify'
import { ShopContext } from '../context/ShopContext';
const SellAPhone = () => {
  const {token} = useContext(ShopContext)
  const [formData, setFormData] = useState({
    phoneName: '',
    phoneBrand: '',
    phoneStorage: '',
    phonePrice: '',
    phoneCondition: '',
    phoneNumber: '',
    phoneFeature1: '',
    phoneFeature2: '',
    phoneFeature3: '',
    phoneFeature4: ''
  });
  

  const [images, setImages] = useState([sampleImage, sampleImage, sampleImage, sampleImage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('phoneName', formData.phoneName);
      data.append('phoneBrand', formData.phoneBrand);
      data.append('phoneStorage', formData.phoneStorage);
      data.append('phonePrice', formData.phonePrice);
      data.append('phoneCondition', formData.phoneCondition);
      data.append('phoneNumber', formData.phoneNumber);
      data.append('phoneFeature1', formData.phoneFeature1);
      data.append('phoneFeature2', formData.phoneFeature2);
      data.append('phoneFeature3', formData.phoneFeature3);
      data.append('phoneFeature4', formData.phoneFeature4);

      images.forEach((image, index) => {
        if (image !== sampleImage) {
          data.append('phoneImages', image); // append each selected image
        }
      });

      const response = await axios.post(backendUrl+"/api/phone/add", data,{headers:{token}}
       );
      if (response.data.success) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex flex-col sm:pt-10 sm:pl-10 pt-8 pl-4 pb-6 text-mainColor font-medium'>
      <h1 className='text-2xl'>Sell your phone with Ajji-Lk</h1>
      <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
        <label>
          <p className='text-[18px]'>Phone Images:</p>
          <div className='flex gap-2 mt-2'>
            {images.map((image, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img
                  className='w-20 border rounded border-backgroundColor cursor-pointer'
                  src={image}
                  alt='Preview'
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
        <label>
          <p className='text-[18px]'>Phone Name:</p>
          <input
            type="text"
            name="phoneName"
            value={formData.phoneName}
            onChange={handleChange}
            placeholder='Enter Here...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
            required
          />
        </label>
        <label>
          <p className='text-[18px]'>Phone Brand:</p>
          <select
            name="phoneBrand"
            value={formData.phoneBrand}
            onChange={handleChange}
            className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor'
            required
          >
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
        <label>
          <p className='text-[18px]'>Phone Storage:</p>
          <select
            name="phoneStorage"
            value={formData.phoneStorage}
            onChange={handleChange}
            className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor'
            required
          >
            <option value="">Select Storage</option>
            <option value="32gb">32 GB</option>
            <option value="64gb">64 GB</option>
            <option value="128gb">128 GB</option>
            <option value="256gb">256 GB</option>
            <option value="512gb">512 GB</option>
            <option value="1tb">1 TB</option>
          </select>
        </label>
        <label>
          <p className='text-[18px]'>Phone Price:</p>
          <input
            type="text"
            name="phonePrice"
            value={formData.phonePrice}
            onChange={handleChange}
            placeholder='Enter Here...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
            required
          />
        </label>
        <label>
          <p className='text-[18px]'>Phone Condition:</p>
          <select
            name="phoneCondition"
            value={formData.phoneCondition}
            onChange={handleChange}
            className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor'
            required
          >
            <option value="">Brand New / Used</option>
            <option value="brandnew">Brand New</option>
            <option value="used">Used</option>
          </select>
        </label>
        <label>
          <p className='text-[18px]'>Phone Number:</p>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Enter Here...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
            required
          />
        </label>
        <label className='flex flex-col'>
          <p className='text-[18px]'>Phone Features:</p>
          <input
            type="text"
            name="phoneFeature1"
            value={formData.phoneFeature1}
            onChange={handleChange}
            placeholder='Feature 1...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
          <input
            type="text"
            name="phoneFeature2"
            value={formData.phoneFeature2}
            onChange={handleChange}
            placeholder='Feature 2...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
          <input
            type="text"
            name="phoneFeature3"
            value={formData.phoneFeature3}
            onChange={handleChange}
            placeholder='Feature 3...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
          <input
            type="text"
            name="phoneFeature4"
            value={formData.phoneFeature4}
            onChange={handleChange}
            placeholder='Feature 4...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
        </label>
        <button className='flex items-start px-4 py-1 bg-mainColor text-lightColor max-w-[170px] justify-center rounded-lg hover:opacity-85' type='submit'>
          SELL THIS PHONE
        </button>
      </form>
    </div>
  );
};

export default SellAPhone;
