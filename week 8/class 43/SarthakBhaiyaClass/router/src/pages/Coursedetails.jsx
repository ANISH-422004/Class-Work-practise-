import React from "react";
import { Link, useParams } from "react-router-dom";

const Coursedetails = () => {
  let c = useParams();
  console.log(c);

  const mentors = [
    {
      name: "Dhanesh",
      description:
        "lorem1kjse  ewj newj bwej WE; FJBwe;fbe ;fjbew fjew jkbewjkbejk bejkb ewkjg ewjg newjkg ",
    },
    {
      name: "Sarthak",
      description:
        "lorem1kjse  ewj newj bwej WE; FJBwe;fbe ;fjbew fjew jkbewjkbejk bejkb ewkjg ewjg newjkg ",
    },
    {
      name: "Alibhai",
      description:
        "lorem1kjse  ewj newj bwej WE; FJBwe;fbe ;fjbew fjew jkbewjkbejk bejkb ewkjg ewjg newjkg ",
    },
  ];

  return (
    <div className="flex  flex-col justify-center items-center h-screen bg-black text-white gap-10">
      <h1 className="text-5xl  ">CourseDetails of {c.coursename}</h1>
      <div className="w-[80%] h-[20%] bg-blue-950">
        {mentors.map((mentor) => {
          return (
            <>
              <div
                key={mentor.name} 
                className="w-30 min-h-10 bg-gray-500 rounded flex justify-center items-center m-2"
              >
                <Link className="p-2" to={`${mentor.name}`}>
                  {mentor.name}
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Coursedetails;
