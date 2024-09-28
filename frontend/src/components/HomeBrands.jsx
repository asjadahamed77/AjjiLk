import React from "react";
import apple from "../assets/iPhone.png";
import samsung from "../assets/samsung.png";
import sony from "../assets/sony.png";
import xiaomi from "../assets/xiaomi.png";
import realme from "../assets/realme.png";
import nokia from "../assets/nokia.png";
import google from "../assets/google-pixel.png";
import oneplus from "../assets/oneplus.png";
import oppo from "../assets/oppo.png";
import vivo from "../assets/vivo.png";
import huawei from "../assets/huawei.png";
import { Link } from "react-router-dom";
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
        <Link to={"/iphones"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={apple} alt="" />
            <p className="text-lg font-medium">iPhone</p>
          </div>
        </Link>
        <Link to={"/samsung"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={samsung} alt="" />
            <p className="text-lg font-medium">Samsung</p>
          </div>
        </Link>
        <Link to={"/google-pixel"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={google} alt="" />
            <p className="text-lg font-medium">Google</p>
          </div>
        </Link>
        <Link to={"/xiaomi"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={xiaomi} alt="" />
            <p className="text-lg font-medium">Xiaomi</p>
          </div>
        </Link>
        <Link to={"/vivo"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={vivo} alt="" />
            <p className="text-lg font-medium">Vivo</p>
          </div>
        </Link>
        <Link to={"/oneplus"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={oneplus} alt="" />
            <p className="text-lg font-medium">OnePlus</p>
          </div>
        </Link>
        <Link to={"/oppo"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={oppo} alt="" />
            <p className="text-lg font-medium">Oppo</p>
          </div>
        </Link>
        <Link to={"/huawei"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={huawei} alt="" />
            <p className="text-lg font-medium">Huawei</p>
          </div>
        </Link>
        <Link to={"/nokia"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={nokia} alt="" />
            <p className="text-lg font-medium">Nokia</p>
          </div>
        </Link>
        <Link to={"/sony"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={sony} alt="" />
            <p className="text-lg font-medium">Sony</p>
          </div>
        </Link>
        <Link to={"/realme"}>
          <div className="bg-slate-100 text-mainColor text-center w-[250px] h-[275px] p-4 rounded-[25px] shadow-md">
            <img className="w-full h-auto" src={realme} alt="" />
            <p className="text-lg font-medium">Realme</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeBrands;
