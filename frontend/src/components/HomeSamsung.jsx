import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Phone from './Phone';

const HomeSamsung = () => {
  const { phones } = useContext(ShopContext);

  return (
    <div className='my-6 px-6'>
      <div className="text-start">
        <h1 className="text-mainColor text-3xl font-semibold">
          Shop Various Samsung at Lower Prices
        </h1>
        <p className="text-secondaryColor text-[20px]">
          Choose from a range of Samsung models, all verified by us.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {
          phones
            .filter(phone => phone.phoneBrand === 'samsung') // Filter for Samsung
            .map((phone, index) => (
              <Phone
                key={index}
                id={phone._id}
                phoneImages={phone.phoneImages}
                phoneName={phone.phoneName}
                phoneBrand={phone.phoneBrand}
                phonePrice={phone.phonePrice}
              />
            ))
        }
      </div>
    </div>
  );
}

export default HomeSamsung;
