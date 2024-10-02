import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const PhoneDetails = () => {
  const { phoneId } = useParams();
  const { phones } = useContext(ShopContext);

  const [phoneData, setPhoneData] = useState(null);
  const [image, setImage] = useState("");

  const fetchPhoneData = async () => {
    const selectedPhone = phones.find((item) => item._id === phoneId);
    console.log(selectedPhone);
    if (selectedPhone) {
      setPhoneData(selectedPhone);
      setImage(selectedPhone.phoneImages[0]); // Set the default image to the first one
    }
  };

  useEffect(() => {
    fetchPhoneData();
  }, [phoneId, phones]);

  return phoneData ? (
    <div>
      {/* Phone Image and Details */}
      <div className="">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row gap-10 p-8 sm:p-12 md:p-16">
          <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {phoneData.phoneImages.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setImage(item)}
                  src={item} // Ensure this path is correct
                  alt={`PhoneImage${index}`}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border border-secondaryColor hover:p-3 duration-300 transition-all ease-linear"
                />
              ))}
            </div>
            <div className="w-full p-3 sm:w-[80%]">
              <img
                className="w-full  border-2 border-mainColor h-auto hover:scale-105 duration-300 transition-all ease-linear"
                src={image}
                alt="SelectedPhoneImage"
              />
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <h1 className="text-3xl text-mainColor font-bold">
              {phoneData.phoneName}
            </h1>
            <div className="flex items-center gap-28 mt-5">
              <div>
                <p className="border border-secondaryColor bg-slate-100 text-gray-600 uppercase rounded px-2 py-1">
                  {phoneData.phoneBrand}
                </p>
              </div>

              <div className="flex gap-1 text-sm text-yellow-500">
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
<div className="flex gap-6 box-border">
<p className="text-secondaryColor border box-border bg-slate-100 w-52 text-center py-2 rounded mt-4 text-lg">Phone Storage: <span className="uppercase">{phoneData.phoneStorage}</span></p>
<p className="text-secondaryColor border box-border bg-slate-100  text-center py-2 rounded  mt-4 text-lg"><span className="uppercase">{phoneData.phoneCondition}</span></p>
</div>
            <p className="text-mainColor font-semibold  mt-4 text-lg">Contact Number: <span>{phoneData.phoneNumber}</span></p>
          
            <div className="grid grid-cols-2 gap-2 mt-4">
            <p className="text-secondaryColor py-2 px-2 bg-slate-100 text-sm sm:text-[16px] rounded ">{phoneData.phoneFeature1}</p>
            <p className="text-secondaryColor py-2 px-2 bg-slate-100 text-sm sm:text-[16px] rounded ">{phoneData.phoneFeature2}</p>
            <p className="text-secondaryColor py-2 px-2 bg-slate-100 text-sm sm:text-[16px] rounded ">{phoneData.phoneFeature3}</p>
            <p className="text-secondaryColor py-2 px-2 bg-slate-100 text-sm sm:text-[16px] rounded ">{phoneData.phoneFeature4}</p>
            </div>
            <p className="text-red-500 font-bold mt-4 text-lg">Price: <span>Rs.{phoneData.phonePrice}</span></p>
            <button className="bg-mainColor mt-4 text-lightColor font-semibold py-2 rounded w-36 hover:opacity-90">CALL NOW</button>
          </div>
        </div>
      </div>
      <hr />
      
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default PhoneDetails;
