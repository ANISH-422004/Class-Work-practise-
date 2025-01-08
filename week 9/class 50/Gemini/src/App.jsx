import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const App = () => {
  const [prompt, setprompt] = useState("");
  const [resulttoshow, setResulttoshow] = useState('')
  const [loding, setLoding] = useState(true)
  const [imagepath, setImagepath] = useState('')
  console.log(prompt);
    


  

  
  let getres = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyAvSoS2hMBZ758fGvL7iTQ5C6_7q1gW39U");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const promptToGive = prompt;
      const result = await model.generateContent(promptToGive);
      setResulttoshow(result.response.text()); 
      setLoding(false)
    } catch (error) {
      console.error("Error generating text:", error);
      setprompt("An error occurred."); 
    }
  };

  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="flex p-1 gap-5">
        <input type="text" placeholder="Prompt for Image ..." 
          onChange={(e)=>{setprompt(e.target.value)}}
        />
        <button 
          className="bg-blue-400 text-white px-1 rounded" 
          onClick={getres} 
        >
          Generate
        </button>

      </div>
      <div className="holder w-[40vw] aspect-video border border-emerald-400 ">
        {loding ?  <h1>waitForResponse</h1> : <p className="text-xs">{resulttoshow}</p>}
      </div>
    </div>
  );
};

export default App;