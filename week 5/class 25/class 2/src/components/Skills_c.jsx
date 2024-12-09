import React from "react";

const Skills_c = ({skillslist}) => {


//   console.log(prop.skillslist)


  return (
    <div className=" w-full h-[20%] flex flex-col gap-5 items-center ">
      <div id="skill-box" className="w-full h-40% flex justify-center">
        {skillslist
          .filter((_, idx) => idx < 4) // Correct filtering logic
          .map(
            (
              skill,
              idx // Map over the filtered array to render JSX
            ) => (
              <div
                key={idx}
                id="box"
                className="p-1 text-[0.5rem] text-center border rounded-3xl m-1 text-white"
              >
                {skill}
              </div>
            )
          )
          
          }
         {
           <div
           
           id="box"
           className="p-1 text-[0.5rem] text-center border border-white rounded-3xl m-1 text-white"
         >
           + {skillslist.length - 4}
         </div> 
         }

      </div>
    </div>
  );
};

export default Skills_c;
