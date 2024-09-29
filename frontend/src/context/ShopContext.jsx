import { createContext, useEffect, useState } from "react";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [token, setToken] = useState("");

  useEffect(()=>{
    if(!token && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"))
  },[])

  const value = {
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
