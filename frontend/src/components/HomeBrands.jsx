import React from "react";

import { Link } from "react-router-dom";
import { phoneBrandData } from "../assets/assets";
const HomeBrands = () => {
  return (
    <div className="px-6">
      <div className="text-start">
        <h1 className="text-mainColor text-3xl font-semibold">
          Choose Your Preferred Brand
        </h1>
        <p className="text-secondaryColor text-[20px]">
          Select a brand to explore its latest models.
        </p>
      </div>
      <div className="flex overflow-x-scroll py-6 gap-6">
       {
        phoneBrandData.map((item,index)=>(
          <Link to={`/phones/${item.phoneBrand}`} key={index} className="min-w-[250px] shadow-lg p-4 rounded-lg" >
            <img className="w-full" src={item.image} alt="" />
            <p className="text-center text-mainColor font-medium capitalize text-lg">{item.phoneBrand}</p>
          </Link>
        ))
       }
      </div>
    </div>
  );
};

export default HomeBrands;
