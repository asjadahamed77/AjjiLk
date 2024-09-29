import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation(); 


  return (
    <ul className='flex flex-col text-mainColor font-medium border border-secondaryColor w-[160px] ml-4 mt-20 text-[18px]'>
      <Link to={'/request'}>
        <li className={`border border-secondaryColor pl-4 py-2 ${
          location.pathname === '/request' ? 'bg-mainColor text-lightColor' : 'bg-lightColor'
        }`}>
          Requests
        </li>
      </Link>
      <Link to={'/view-phones'}>
        <li className={`border border-secondaryColor pl-4 py-2 ${
          location.pathname === '/view-phones' ? 'bg-mainColor text-lightColor' : 'bg-lightColor'
        }`}>
          Phones
        </li>
      </Link>
      <Link to={'/all-users'}>
        <li className={`border border-secondaryColor pl-4 py-2 ${
          location.pathname === '/all-users' ? 'bg-mainColor text-lightColor' : 'bg-lightColor'
        }`}>
          Users
        </li>
      </Link>
    </ul>
  );
};

export default SideBar;
