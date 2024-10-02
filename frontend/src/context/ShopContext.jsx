import { createContext, useEffect, useState } from "react";
import axios from "axios";
import backendUrl from "../helpers/backendUrl";
import { toast } from "react-toastify";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [phones,setPhones] = useState([])
  
  const getPhones = async ()=> {
    try {
      const response = await axios.get(backendUrl+"/api/phone/approved")
      if(response.data.success){
        setPhones(response.data.phones.reverse())
      }else{
        toast.error(response.error.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
  getPhones()
  },[])

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
