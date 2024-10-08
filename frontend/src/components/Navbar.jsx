import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import {  FaUserCircle } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {token,setToken} = useContext(ShopContext)
const navigate = useNavigate()

const logout = ()=>{
  localStorage.removeItem("token")
  setToken("")
  navigate("/login")
  toast.success("Logged Out Successfully!")
}

  return (
    <div className="flex items-center lg:justify-evenly justify-between md:px-5 md:py-2 py-4 px-4 shadow-md box-border bg-white z-100 fixed top-0 left-0 right-0">
      {/* Mobile Menu Icon */}
      <div
        onClick={() => setShowMenu(true)}
        className="text-mainColor text-2xl lg:hidden font-bold cursor-pointer"
      >
        <AiOutlineMenuUnfold />
      </div>

      {/* Logo */}
      <div>
        <h1 className="text-2xl text-mainColor font-semibold">
          <Link to={"/"}>
            Ajji<span className="text-secondaryColor">-Lk</span>
          </Link>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="lg:gap-5 gap-4 box-border items-center hidden lg:flex">
        <Link to={"/"} className="text-md hover:opacity-85 text-mainColor font-medium">
          <li>Home</li>
        </Link>

        {/* Phones Dropdown */}
        <li className="group relative text-md hover:opacity-85 text-mainColor font-medium cursor-pointer">
          <Link to={'/phones'}><div className="flex items-center gap-1">
            <span>Phones</span> <IoMdArrowDropdown />
          </div></Link>
          <div className="hidden group-hover:flex flex-col absolute rounded-xl py-2 top-full left-0 bg-white border w-52 z-10">
            <Link to={"/phones/iphones"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              iPhones
            </Link>
            <Link to={"/phones/samsung"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Samsung
            </Link>
            <Link to={"/phones/xiaomi"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Xiaomi
            </Link>
            <Link to={"/phones/google"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Google
            </Link>
            <Link to={"/phones/one-plus"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              One Plus
            </Link>
            <Link to={"/phones/oppo"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Oppo
            </Link>
            <Link to={"/phones/vivo"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Vivo
            </Link>
            <Link to={"/phones/huawei"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Huawei
            </Link>
            <Link to={"/phones/sony"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Sony
            </Link>
            <Link to={"/phones/nokia"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Nokia
            </Link>
            <Link to={"/phones/realme"} className="block px-4 py-2 hover:bg-lightColor text-mainColor">
              Realme
            </Link>
          </div>
        </li>

        <Link to={"/sell-a-phone"} className="text-md hover:opacity-85 text-mainColor font-medium">
          <li>Sell a Phone</li>
        </Link>
        <Link to={"/my-listings"} className="text-md hover:opacity-85 text-mainColor font-medium">
          <li>My Listings</li>
        </Link>
        <Link to={"/contact-us"} className="text-md hover:opacity-85 text-mainColor font-medium">
          <li>Contact Us</li>
        </Link>
        <Link to={"/about-us"} className="text-md hover:opacity-85 text-mainColor font-medium">
          <li>About Us</li>
        </Link>
      </ul>

      {/* User Icons */}
      <div className="flex items-center text-mainColor gap-4">
      <div>
        
         {
          token? (
            
            <button onClick={logout} className="bg-transparent hover:text-lightColor hover:bg-mainColor ml-4 text-mainColor border-2 border-mainColor font-semibold px-3 rounded-full py-0.5">
              Logout
            </button>
           
          ) : (
            <Link to={'/signup'}>
            <button className="bg-transparent hover:text-lightColor hover:bg-mainColor ml-4 text-mainColor border-2 border-mainColor font-semibold px-3 rounded-full py-0.5">
              Sign Up
            </button>
            </Link>
          )
         }
        </div>
        <div className="text-2xl">
          <Link to={"/profile"}>
            <FaUserCircle />
          </Link>
        </div>
        
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-101 flex-col fixed top-0 left-0 w-[300px] h-full bg-secondaryColor transition-transform transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="flex justify-end p-5 text-mainColor text-3xl cursor-pointer"
          onClick={() => setShowMenu(false)}
        >
          <MdClose />
        </div>
        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-2 px-6 text-lightColor">
          <Link to={"/"} onClick={() => setShowMenu(false)}>
            <li className="text-[18px]">Home</li>
          </Link>
          <hr />
          <Link to={"/phones"} onClick={() => setShowMenu(false)}>
            <li className="text-[18px]">Phones</li>
          </Link>
          <hr />
          <Link to={"/sell-a-phone"} onClick={() => setShowMenu(false)}>
            <li className="text-[18px]">Sell a Phone</li>
          </Link>
          <hr />
          <Link to={"/my-listings"} onClick={() => setShowMenu(false)}>
            <li className="text-[18px]">My Listings</li>
          </Link>
          <hr />
          <Link to={"/contact-us"} onClick={() => setShowMenu(false)}>
            <li className="text-[18px]">Contact Us</li>
          </Link>
          <hr />
          <Link to={"/about-us"} onClick={() => setShowMenu(false)}>
            <li className="text-[18px]">About Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
