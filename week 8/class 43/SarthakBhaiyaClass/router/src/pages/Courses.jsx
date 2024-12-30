import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      course: "Frontend-Domination",
    },
    {
      id: 2,
      course: "Backend-Domination",
    },
    {
      id: 3,
      course: "DSA-Domination",
    },
  ];

  return (
    <div className="flex flex-col justify-center  items-center h-screen bg-black text-white">
      <h1 className="text-5xl  ">Courses page</h1>
      {courses.map((course) => {
        return <Link key={course.id} to={`${course.course}`} className="m-2 bg-slate-900 p-2 rounded">{course.course}</Link>;
      })}
    </div>
  );
};

export default Courses;
