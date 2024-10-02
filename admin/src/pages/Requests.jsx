import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backendUrl from '../helpers/backendUrl';
import { toast } from 'react-toastify';

const Requests = () => {
  const [phones, setPhones] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState({});

  // Fetch the list of unapproved phones from the backend
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/phone/unapproved`);
        console.log('API Response:', response.data);
        setPhones(response.data.phones.reverse());
        // Initialize selected statuses based on fetched phones
        const initialStatuses = {};
        response.data.phones.forEach(phone => {
          initialStatuses[phone._id] = '';
        });
        setSelectedStatuses(initialStatuses);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

  // Handle status change
  const handleStatusChange = (phoneId, status) => {
    setSelectedStatuses((prevStatuses) => ({
      ...prevStatuses,
      [phoneId]: status
    }));
  };

  // Handle form submission for approval or removal
  const handleSubmit = async (phoneId) => {
  const selectedStatus = selectedStatuses[phoneId];

  if (selectedStatus === 'approve') {
    try {
      const response = await axios.post(backendUrl + '/api/phone/approve', { phoneId });
      toast.success("Phone Approved to Display");

      // Update local state to remove the approved phone
      setPhones((prevPhones) => prevPhones.filter((phone) => phone._id !== phoneId));

    } catch (error) {
      console.error('Error approving phone:', error);
    }
  } else if (selectedStatus === 'remove') {
    try {
      await axios.post(backendUrl + '/api/phone/reject', { phoneId });
      toast.success("Phone Removed Successfully");

      // Update local state to remove the rejected phone
      setPhones((prevPhones) => prevPhones.filter((phone) => phone._id !== phoneId));

    } catch (error) {
      console.error('Error removing phone:', error);
    }
  }
};


  return (
    <div className='min-h-screen p-4'>
      {phones.length > 0 ? (
        phones.map((phone) => (
          <div key={phone._id} className='grid grid-cols-[1.5fr_2fr] max-w-[400px] border border-mainColor mb-4'>
            {/* Phone Details */}
            <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
              <p>Phone Name</p>
            </div>
            <div className='border border-mainColor pl-3 p-1 '>
              <p>{phone.phoneName}</p>
            </div>
            {/* Phone Brand */}
            <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
              <p>Phone Brand</p>
            </div>
            <div className='border border-mainColor pl-3 p-1'>
              <p>{phone.phoneBrand}</p>
            </div>
            {/* Phone Price */}
            <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
              <p>Phone Price</p>
            </div>
            <div className='border border-mainColor pl-3 p-1'>
              <p>Rs. {phone.phonePrice}</p>
            </div>
            {/* Phone Storage */}
            <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
              <p>Phone Storage</p>
            </div>
            <div className='border border-mainColor pl-3 p-1'>
              <p>{phone.phoneStorage}</p>
            </div>
            {/* Phone Condition */}
            <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
              <p>Phone Condition</p>
            </div>
            <div className='border border-mainColor pl-3 p-1'>
              <p>{phone.phoneCondition}</p>
            </div>
            {/* Phone Status */}
            <div className='border border-mainColor pl-2 p-1 bg-secondaryColor text-lightColor font-medium '>
              <p>Status</p>
            </div>
            <select
              className='bg-transparent rounded pl-4 p-1 border border-mainColor'
              value={selectedStatuses[phone._id] || ''}
              onChange={(e) => handleStatusChange(phone._id, e.target.value)}
            >
              <option value="">Pending</option>
              <option value="approve">Approve</option>
              <option value="remove">Remove</option>
            </select>
            {/* Submit Button */}
            <div className='col-span-2 p-2'>
              <button
                className='px-4 py-1 bg-mainColor text-lightColor rounded-lg hover:opacity-85'
                onClick={() => handleSubmit(phone._id)}
              >
                Submit
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No phones to approve.</p>
      )}
    </div>
  );
};

export default Requests;
