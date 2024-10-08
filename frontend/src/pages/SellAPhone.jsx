import React, { useContext, useState } from 'react';
import axios from 'axios';
import sampleImage from '../assets/sampleImage.jpg';
import backendUrl from '../helpers/backendUrl';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import { ClipLoader } from 'react-spinners';

const SellAPhone = () => {
  const { token } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(false);

  // State for form data and images
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start spinner on form submission

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

      // Append images if selected
      if (image1) data.append('image1', image1);
      if (image2) data.append('image2', image2);
      if (image3) data.append('image3', image3);
      if (image4) data.append('image4', image4);

      const response = await axios.post(`${backendUrl}/api/phone/add`, data, {
        headers: {
          token
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Stop the spinner once the API request finishes
    }
  };

  return (
    <div className='min-h-screen flex flex-col sm:pt-10 sm:pl-10 pt-8 pl-4 pb-6 text-mainColor font-medium'>
      <h1 className='text-2xl'>Sell your phone with Ajji-Lk</h1>
      <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
        {/* Image upload section */}
        <p className='text-[18px]'>Phone Images:</p>
        <div className='flex gap-2 mt-2'>
          <label htmlFor='image1'>
            <img
              className='w-20 border border-mainColor'
              src={image1 ? URL.createObjectURL(image1) : sampleImage}
              alt=''
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type='file'
              id='image1'
              hidden
            />
          </label>
          <label htmlFor='image2'>
            <img
              className='w-20 border border-mainColor'
              src={image2 ? URL.createObjectURL(image2) : sampleImage}
              alt=''
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type='file'
              id='image2'
              hidden
            />
          </label>
          <label htmlFor='image3'>
            <img
              className='w-20 border border-mainColor'
              src={image3 ? URL.createObjectURL(image3) : sampleImage}
              alt=''
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type='file'
              id='image3'
              hidden
            />
          </label>
          <label htmlFor='image4'>
            <img
              className='w-20 border border-mainColor'
              src={image4 ? URL.createObjectURL(image4) : sampleImage}
              alt=''
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type='file'
              id='image4'
              hidden
            />
          </label>
        </div>

        {/* Form fields */}
        <label>
          <p className='text-[18px]'>Phone Name:</p>
          <input
            type='text'
            name='phoneName'
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
            name='phoneBrand'
            value={formData.phoneBrand}
            onChange={handleChange}
            className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor'
            required
          >
            <option value=''>Select Brand</option>
            <option value='iphone'>iPhone</option>
            <option value='samsung'>Samsung</option>
            <option value='google'>Google</option>
            <option value='xiaomi'>Xiaomi</option>
            <option value='vivo'>Vivo</option>
            <option value='oneplus'>OnePlus</option>
            <option value='oppo'>Oppo</option>
            <option value='huawei'>Huawei</option>
            <option value='nokia'>Nokia</option>
            <option value='sony'>Sony</option>
            <option value='realme'>Realme</option>
          </select>
        </label>

        <label>
          <p className='text-[18px]'>Phone Storage:</p>
          <select
            name='phoneStorage'
            value={formData.phoneStorage}
            onChange={handleChange}
            className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor'
            required
          >
            <option value=''>Select Storage</option>
            <option value='32gb'>32 GB</option>
            <option value='64gb'>64 GB</option>
            <option value='128gb'>128 GB</option>
            <option value='256gb'>256 GB</option>
            <option value='512gb'>512 GB</option>
            <option value='1tb'>1 TB</option>
          </select>
        </label>

        <label>
          <p className='text-[18px]'>Phone Price:</p>
          <input
            type='text'
            name='phonePrice'
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
            name='phoneCondition'
            value={formData.phoneCondition}
            onChange={handleChange}
            className='py-1.5 px-4 rounded-lg bg-transparent border border-backgroundColor'
            required
          >
            <option value=''>Brand New / Used</option>
            <option value='brandnew'>Brand New</option>
            <option value='used'>Used</option>
          </select>
        </label>

        <label>
          <p className='text-[18px]'>Phone Number:</p>
          <input
            type='number'
            name='phoneNumber'
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
            type='text'
            name='phoneFeature1'
            value={formData.phoneFeature1}
            onChange={handleChange}
            placeholder='Feature 1...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
          <input
            type='text'
            name='phoneFeature2'
            value={formData.phoneFeature2}
            onChange={handleChange}
            placeholder='Feature 2...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
          <input
            type='text'
            name='phoneFeature3'
            value={formData.phoneFeature3}
            onChange={handleChange}
            placeholder='Feature 3...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
          <input
            type='text'
            name='phoneFeature4'
            value={formData.phoneFeature4}
            onChange={handleChange}
            placeholder='Feature 4...'
            className='max-w-[400px] w-full pl-4 p-2 mt-1 rounded bg-transparent border border-backgroundColor'
          />
        </label>

        <button
          className='flex items-center px-4 py-1 bg-mainColor text-lightColor max-w-[170px] justify-center rounded-lg hover:opacity-85'
          type='submit'
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? <ClipLoader size={20} color={"#fff"} /> : 'SELL THIS PHONE'}
        </button>
      </form>
    </div>
  );
};

export default SellAPhone;
