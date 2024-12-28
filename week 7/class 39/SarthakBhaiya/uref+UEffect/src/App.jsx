import React, { useEffect, useRef, useState } from "react";

const App = () => {

  const oggyRef = useRef(null)
  const [Xval, setXval] = useState(0)
  const [Yval, setYval] = useState(0)
  const [deg, setdeg] = useState(0)


  const ClickHandeler =()=>{
    console.log(oggyRef.current);
    setXval(Math.random()*70) 
    setYval(Math.random()*70) 
    setdeg(Math.random()*360) 
    console.log(Xval,Yval,deg)

  }

  useEffect(() => {
    oggyRef.current.style.top = Yval+"%"
    oggyRef.current.style.left = Xval+"%"
    oggyRef.current.style.rotate = deg +"deg"
  

  }, [Xval,Yval,deg])
  

  return (
    <div>
  
      
        <img ref={oggyRef}
          src="data:image/png;base64,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"
          alt=""
        />
      

      <button  onClick={()=>ClickHandeler()}>change Position</button>
    </div>
  );
};

export default App;