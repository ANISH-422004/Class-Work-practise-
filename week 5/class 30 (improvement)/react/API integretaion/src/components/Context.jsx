import React, { createContext, useState } from "react";


export const UserContext = createContext()
// console.log(UserContext);


const Context = (props) => {
    const [Users, setUsers] = useState([
        {
            id: 0 ,
            username : "Anish",
            city: "Kolkata"
        },
        {
            id: 1 ,
            username : "juli",
            city: "Delhi"
        },
        {
            id: 2 ,
            username : "Mili",
            city: "Chennai"
        }

    ])
  return <>
            <UserContext.Provider value={{Users,setUsers}}>{props.children}</UserContext.Provider>
        </>;
};

export default Context;
