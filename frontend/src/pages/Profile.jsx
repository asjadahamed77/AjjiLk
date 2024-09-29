import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    if (!token) {
      navigate("/signup"); 
      toast.error("Please Create a Account!!!")
    }
  }, [navigate]);

  return (
    <form className="flex flex-col min-h-screen  w-[400px] mx-auto gap-4 font-medium">
      <h1 className="text-2xl text-mainColor text-center font-semibold mt-16">
        User Profile
      </h1>
      <label htmlFor="name">
        <p className="text-[18px] text-mainColor ">Name:</p>
        <input
          type="text"
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded min-w-[350px] w-full mt-1 "
        />
      </label>
      <label htmlFor="email">
        <p className="text-[18px] text-mainColor ">Email:</p>
        <input
          type="email"
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded min-w-[350px] w-full mt-1 "
        />
      </label>
      <label htmlFor="phone">
        <p className="text-[18px] text-mainColor ">Phone:</p>
        <input
          type="number"
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded min-w-[350px] w-full mt-1 "
        />
      </label>
      <label htmlFor="address">
        <p className="text-[18px] text-mainColor ">Address:</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Street"
            className="bg-transparent border border-secondaryColor pl-3 p-2 rounded w-1/2"
          />
          <input
            type="text"
            placeholder="City"
            className="bg-transparent border border-secondaryColor pl-3 p-2 rounded w-1/2"
          />
        </div>
        <input
          type="text"
          placeholder="District"
          className="bg-transparent border border-secondaryColor pl-3 p-2 rounded w-full mt-2"
        />
      </label>
      <button type="submit" className="bg-backgroundColor text-mainColor font-semibold py-2 rounded w-40 border hover:opacity-85">
        UPDATE PROFILE
      </button>
    </form>
  );
};

export default Profile;
