import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import phoneImg from '../assets/iPhone.png';
import backendUrl from '../helpers/backendUrl';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const MyListings = () => {
  const { token } = useContext(ShopContext);
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user-added phones when the component mounts
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/phone/added-phones`, {
          headers: {
            token, // Attach the token in the headers
          },
        });
        setPhones(response.data.phones);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
        toast.error('Failed to load phones');
        setLoading(false);
      }
    };

    if (token) {
      fetchPhones();
    }
  }, [token]);

  // Function to track phone status
  const trackStatus = async (phoneId) => {
    try {
      const response = await axios.get(`${backendUrl}/api/phone/track/${phoneId}`, {
        headers: {
          token,
        },
      });
      const { status } = response.data;
      toast.success(`Phone status: ${status}`);
    } catch (error) {
      console.error('Error tracking phone status:', error);
      toast.error('Failed to track phone status');
    }
  };

  // Function to remove a phone listing
  const removePhone = async (phoneId) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/phone/remove/${phoneId}`, {
        headers: {
          token,
        },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setPhones(phones.filter(phone => phone._id !== phoneId));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error removing phone:', error);
      toast.error('Failed to remove phone');
    }
  };

  if (loading) {
    return <p className='min-h-screen text-mainColor text-lg p-6'> Loading phones...</p>;
  }

  return (
    <div className='min-h-screen px-4 sm:px-6 md:px-8 pt-6'>
      <h1 className="text-mainColor text-3xl font-semibold">My Listings</h1>

      <div className='hidden sm:grid border border-mainColor bg-secondaryColor text-sm lg:text-base text-lightColor font-semibold lg:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_0.5fr] sm:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_0.5fr] p-2 items-center mt-4'>
        <p>Image</p>
        <p>Phone Name</p>
        <p>Phone Brand</p>
        <p>Price</p>
        <p>Status</p>
        <p>Track Status</p>
        <p>Remove</p>
      </div>

      {phones.length > 0 ? (
        phones.map(phone => (
          <div key={phone._id} className='border border-secondaryColor text-sm lg:text-base sm:grid lg:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_0.5fr] sm:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_0.5fr] p-2 sm:items-center mt-4 flex flex-col gap-1.5'>
            <img className='w-12' src={phone.phoneImages[0]} alt="Phone" />
            <p className='overflow-hidden text-secondaryColor'>{phone.phoneName}</p>
            <p className='text-secondaryColor uppercase'>{phone.phoneBrand}</p>
            <p className='text-secondaryColor'>Rs.{phone.phonePrice}</p>
            <p className='text-secondaryColor'>{phone.isApproved ? 'Approved' : 'Pending'}</p>
            <p
              className='text-secondaryColor bg-backgroundColor w-24 lg:w-28 text-center rounded-lg py-1 cursor-pointer'
              onClick={() => trackStatus(phone._id)}
            >
              Track Status
            </p>
            <p
              className='hidden sm:block text-secondaryColor cursor-pointer pl-4'
              onClick={() => removePhone(phone._id)}
            >
              X
            </p>
            <p
              className='sm:hidden bg-red-400 text-lightColor w-24 text-center rounded-lg mt-2 py-1.5'
              onClick={() => removePhone(phone._id)}
            >
              Delete Phone
            </p>
          </div>
        ))
      ) : (
        <p className="mt-4 text-secondaryColor">No phones listed yet.</p>
      )}
    </div>
  );
};

export default MyListings;
