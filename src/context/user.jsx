import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({children})=>{
    const [isLogin , setIsLogin] = useState(localStorage.getItem("userToken")?true:false);
const [isUserName , setIsUserName] = useState({});
useEffect(()=>{
   const token =  localStorage.getItem("userToken");
   if(token){
   setIsLogin(true);
   const decoded = jwtDecode(token);
    setIsUserName(decoded);
   }
    


},[])
    return <UserContext.Provider value={{isLogin , setIsLogin , isUserName , setIsUserName}}>
        {children}
    </UserContext.Provider>

}
export default UserContextProvider;