import React, { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import Phone from "../components/Phone";

const AllPhones = () => {
  const [showCategory, setShowCategory] = useState(false); // Toggle category filter visibility
  const { phones } = useContext(ShopContext); // Context containing all phones
  const [filterPhones, setFilterPhones] = useState([]); // Filtered phones
  const [category, setCategory] = useState([]); // Track selected categories
  const [sortType, setSortType] = useState("relevant"); // Sorting type

  // Toggle filter panel visibility
  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  // Handle category filter selection
  const toggleCategoryFilter = (e) => {
    const value = e.target.value.toLowerCase(); // Ensure value is in lowercase
    // Check if the category is already selected
    if (category.includes(value)) {
      // Remove category if already selected
      setCategory((prev) => prev.filter((phone) => phone !== value));
    } else {
      // Add category if not selected
      setCategory((prev) => [...prev, value]);
    }
  };

  // Apply filter based on selected categories
  const applyFilter = () => {
    let phonesCopy = phones.slice(); // Create a copy of the phones array

    // Debugging: Check category and phones state
    console.log("Selected categories: ", category);
    console.log("All phones: ", phones);

    // Filter phones if a category is selected
    if (category.length > 0) {
      phonesCopy = phonesCopy.filter((phone) => category.includes(phone.phoneBrand.toLowerCase()));
    }

    setFilterPhones(phonesCopy);

    // Debugging: Check the filtered phones
    console.log("Filtered phones: ", phonesCopy);
  };

  // Reapply filter whenever `category` or `phones` changes
  useEffect(() => {
    applyFilter();
  }, [category, phones]);

  return (
    <div className="text-mainColor flex flex-col sm:flex-row min-h-screen">
      {/* Filter Category */}
      <div className="pl-10 pt-10 w-[250px]">
        <div className="border border-backgroundColor p-2 sm:p-4">
          <div className="flex gap-2 items-center">
            <p className="font-semibold sm:text-[20px] text-base">
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
            } sm:flex mt-3 ml-3 flex-col gap-3`}
          >
            {/* Category Checkboxes */}
            <label htmlFor="iphone" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="iphone"
                value="iphone"
              />
              <p className="font-medium text-base">iPhone</p>
            </label>

            <label htmlFor="samsung" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="samsung"
                value="samsung"
              />
              <p className="font-medium text-base">Samsung</p>
            </label>

            <label htmlFor="google" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="google"
                value="google"
              />
              <p className="font-medium text-base">Google</p>
            </label>

            <label htmlFor="xiaomi" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="xiaomi"
                value="xiaomi"
              />
              <p className="font-medium text-base">Xiaomi</p>
            </label>

            <label htmlFor="vivo" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="vivo"
                value="vivo"
              />
              <p className="font-medium text-base">Vivo</p>
            </label>

            <label htmlFor="oneplus" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="oneplus"
                value="oneplus"
              />
              <p className="font-medium text-base">OnePlus</p>
            </label>

            <label htmlFor="oppo" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="oppo"
                value="oppo"
              />
              <p className="font-medium text-base">Oppo</p>
            </label>

            <label htmlFor="huawei" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="huawei"
                value="huawei"
              />
              <p className="font-medium text-base">Huawei</p>
            </label>

            <label htmlFor="nokia" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="nokia"
                value="nokia"
              />
              <p className="font-medium text-base">Nokia</p>
            </label>

            <label htmlFor="sony" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="sony"
                value="sony"
              />
              <p className="font-medium text-base">Sony</p>
            </label>

            <label htmlFor="realme" className="flex items-center gap-2">
              <input
                onChange={toggleCategoryFilter}
                type="checkbox"
                id="realme"
                value="realme"
              />
              <p className="font-medium text-base">Realme</p>
            </label>
          </div>
        </div>
      </div>

      {/* Showing all the Phones */}
      <div className="flex-1 pt-6 px-6">
        <div className="flex justify-between">
          <h1 className="text-xl sm:text-2xl text-mainColor font-semibold">
            All Mobile Phones
          </h1>
          <select className="md:mr-8 lg:mr-10 xl:mr-16 mr-4 text-sm sm:text-base rounded-lg bg-lightColor border border-mainColor text-mainColor">
            <option value="">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>
        <hr className="h-0.5 bg-secondaryColor w-[98%] sm:w-[95%] mt-1 rounded-full" />

        {/* Display Filtered Phones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
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
