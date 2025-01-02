import React, { createContext, useEffect, useState} from "react";
import { getLocalstorage, setLocalstorage } from "../utils/Localstorage";


export const Authcontext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [employeesdata,admindata] =  getLocalstorage()
    useEffect(()=>{
        setLocalstorage()
        setUser({employeesdata,admindata})
        
    },[])

    // console.log(user);
    
    return (
    <div>
      <Authcontext.Provider value={{user,setUser}}>{children}</Authcontext.Provider>
    </div>
  );
};

export default AuthProvider;
