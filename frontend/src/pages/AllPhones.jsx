import React, { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import Phone from "../components/Phone";
import { useNavigate, useParams } from "react-router-dom";

const AllPhones = () => {
  const {phoneBrand} = useParams()
  const navigate = useNavigate()
  const [showCategory, setShowCategory] = useState(false); // Toggle category filter visibility
  const { phones } = useContext(ShopContext); // Context containing all phones
  const [filterPhones, setFilterPhones] = useState([]); // Filtered phones
  const [sortType, setSortType] = useState("relavent"); // Sorting type

  // Toggle filter panel visibility
  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  

  // Apply filter based on selected categories
  const applyFilter = () => {


    if(phoneBrand){
      setFilterPhones(phones.filter(item => item.phoneBrand === phoneBrand))
    }else{
      setFilterPhones(phones)
    }

    

    
  };

  const sortProduct = () => {
    let fpCopy =  filterPhones.slice()
    switch(sortType){
      case 'low-to-high':
        setFilterPhones(fpCopy.sort((a,b)=>(a.phonePrice - b.phonePrice)));
        break;

      case 'high-to-low':
        setFilterPhones(fpCopy.sort((a,b)=>(b.phonePrice - a.phonePrice)));
        break;

        default:
          applyFilter();
          break;
    }
  }

  // Reapply filter whenever `category` or `phones` changes
  useEffect(() => {
    applyFilter();
  }, [phones,phoneBrand]);

  useEffect(()=>{
    sortProduct()
  },[sortType])

  return (
    <div className="text-mainColor flex flex-col sm:flex-row min-h-screen">
      {/* Filter Category */}
      <div className="px-10 sm:px-0 sm:pl-10 pt-10 w-full sm:w-[250px]">
        <div className="sm:border border-backgroundColor ">
          <div className="flex gap-2 items-center">
            <p className="font-semibold sm:text-[20px] text-base pl-4 pt-4">
              Filter Category
            </p>
            <div
              className={`text-mainColor text-lg cursor-pointer ${
                showCategory ? "" : "-rotate-90"
              } sm:hidden`}
              onClick={toggleCategory}
            >
              <FaArrowAltCircleDown />
            </div>
          </div>
          <div
            className={`${
              showCategory ? "flex" : "hidden"
            } sm:flex mt-3 ml-3 flex-col gap-2`}
          >

<p onClick={()=> phoneBrand === 'iphone'? navigate('/phones'): navigate('/phones/iphone')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'iphone'?'bg-green-100 text-mainColor':""}`} >iPhones</p>
<p onClick={()=> phoneBrand === 'samsung'? navigate('/phones'): navigate('/phones/samsung')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'samsung'?'bg-green-100 text-mainColor':""}`} >Samsung</p>
<p onClick={()=> phoneBrand === 'sony'? navigate('/phones'): navigate('/phones/sony')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'sony'?'bg-green-100 text-mainColor':""}`} >Sony</p>
<p onClick={()=> phoneBrand === 'xiaomi'? navigate('/phones'): navigate('/phones/xiaomi')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'xiaomi'?'bg-green-100 text-mainColor':""}`} >Xiaomi</p>
<p onClick={()=> phoneBrand === 'vivo'? navigate('/phones'): navigate('/phones/vivo')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'vivo'?'bg-green-100 text-mainColor':""}`} >Vivo</p>
<p onClick={()=> phoneBrand === 'oppo'? navigate('/phones'): navigate('/phones/oppo')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'oppo'?'bg-green-100 text-mainColor':""}`} >Oppo</p>
<p onClick={()=> phoneBrand === 'google'? navigate('/phones'): navigate('/phones/google')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'google'?'bg-green-100 text-mainColor':""}`} >Google</p>
<p onClick={()=> phoneBrand === 'nokia'? navigate('/phones'): navigate('/phones/nokia')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'nokia'?'bg-green-100 text-mainColor':""}`} >Nokia</p>
<p onClick={()=> phoneBrand === 'oneplus'? navigate('/phones'): navigate('/phones/oneplus')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'oneplus'?'bg-green-100 text-mainColor':""}`} >OnePlus</p>
<p onClick={()=> phoneBrand === 'realme'? navigate('/phones'): navigate('/phones/realme')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'realme'?'bg-green-100 text-mainColor':""}`} >Realme</p>
<p onClick={()=> phoneBrand === 'huawei'? navigate('/phones'): navigate('/phones/huawei')} className={`p-2 pl-4 border-2 rounded cursor-pointer ${phoneBrand === 'huawei'?'bg-green-100 text-mainColor':""}`} >Huawei</p>

          </div>
         
        </div>
      </div>

      {/* Showing all the Phones */}
      <div className="flex-1 pt-6 px-6">
        <div className="flex justify-between">
          <h1 className="text-xl sm:text-2xl text-mainColor font-semibold">
            All Mobile Phones
          </h1>
          <select onChange={(e)=>setSortType(e.target.value)} className="md:mr-8 lg:mr-10 xl:mr-16 mr-4 text-sm sm:text-base rounded-lg bg-lightColor border border-mainColor text-mainColor">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>
        <hr className="h-0.5 bg-secondaryColor w-[98%] sm:w-[95%] mt-1 rounded-full" />

        {/* Display Filtered Phones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filterPhones.map((phone, index) => (
            <Phone
              key={index}
              id={phone._id}
              phoneImages={phone.phoneImages}
              phoneName={phone.phoneName}
              phoneBrand={phone.phoneBrand}
              phonePrice={phone.phonePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPhones;
