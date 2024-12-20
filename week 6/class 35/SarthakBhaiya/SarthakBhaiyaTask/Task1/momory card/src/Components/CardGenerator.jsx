import React, { useState } from "react";
import FormSection from "./FormSection";
import CardSection from "./CardSection";

const CardGenerator = () => {
    const [dataofeachperson, setdataofeachperson] = useState([])

  return (
    <div className="p-6  h-screen w-full ">
      <h1 className="text-2xl font-semibold text-center mb">Submit Data For Contact</h1>
      <h2 className="text-xs font-mono text-center mb-6">Our team will Contact you ASAP</h2>
      <div className="flex h-full w-full justify-center ">
      <FormSection dataofeachperson={dataofeachperson} setdataofeachperson={setdataofeachperson}/>
      <div className="ml-6">
        <CardSection dataofeachperson={dataofeachperson} setdataofeachperson={setdataofeachperson}/>
      </div>
      </div>
    </div>
  );
};

export default CardGenerator;
