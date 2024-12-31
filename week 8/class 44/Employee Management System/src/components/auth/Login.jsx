import React, { useState } from "react";

const Login = ({handelLogin}) => {

     
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const SubmitHandeler = (e) => {
    e.preventDefault()
    console.log(email);
    console.log(password);
    handelLogin(email,password)
    setEmail("")
    setPassword( "")

  };




  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-2 border-emrald-500 p-8 rounded-lg ">
        <form
          onSubmit={(e)=>{SubmitHandeler(e)}}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="border-2 text-xl border-emerald-400 rounded-full bg-black m-1 p-2"
            type="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            placeholder="Enter your Email"
            required
          />
          <input
            className="border-2 text-xl border-emerald-400 rounded-full bg-black m-1 p-2"
            type="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)

            }}
            placeholder="Enter your Password"
          />
          <button className="border-2 text-xl bg-emerald-400 rounded-full  m-1  py-1 w-[15rem]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
