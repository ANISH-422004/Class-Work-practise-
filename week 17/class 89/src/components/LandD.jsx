import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const LandD = () => {
  const { isDark, Toggletheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-screen flex flex-col gap-10 items-center justify-center
    transition-all duration-500
    ${isDark ? "bg-black text-white" : "bg-white text-black"}`
    }     
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        quas maxime distinctio a eveniet unde veniam amet placeat eligendi
        ullam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
        exercitationem modi numquam voluptates rem obcaecati? Laboriosam, earum
        explicabo quod beatae blanditiis incidunt, impedit laborum harum
        quibusdam fuga dicta, at optio!
      </p>

      <button
        onClick={() => Toggletheme()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default LandD;
