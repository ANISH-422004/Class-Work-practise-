import React from "react";
import Nav_c from "./Nav_c";
import Profile_c from "./Profile_c";
import Skills_c from "./Skills_c";

const Card = ( prop ) => {
//    console.log(prop);   
//   console.log(prop.data.skills);  // getting each obj info for each user 
//   console.log(prop.data.rate);  // getting each obj info for each user 
    


    
                    return (

                    <div
                        
                        className=" m-4 w-72 h-96 bg-black text-whit rounded-3xl flex flex-col gap-8 p-3  transition-all duration-300 hover:scale-110"
                    >
                            <Nav_c availability={prop.data.available} rate={prop.data.rate}/>
                            
                            <Profile_c name={prop.data.fullName} src={prop.data.profilePhoto} description={prop.data.description} />  
                            {/* name,src,description */}
                            
                            <Skills_c skillslist={prop.data.skills} />
                    </div>

                    );

};

export default Card;
