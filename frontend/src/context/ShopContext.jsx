import { createContext, useEffect, useState } from "react";
import phones from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [token, setToken] = useState("");

  

  useEffect(()=>{
    if(!token && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"))
  },[])

  const value = {
    phones,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
