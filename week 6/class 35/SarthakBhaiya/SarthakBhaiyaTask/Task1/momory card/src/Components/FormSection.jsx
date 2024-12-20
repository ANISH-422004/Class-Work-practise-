import React, { useState } from 'react';

const FormSection = ({dataofeachperson,setdataofeachperson}) => {
    const [eachperson, seteachperson] = useState({username : "", company : "" , phone : "" , favourite : false})
        // console.log(eachperson);
    console.log(dataofeachperson);
    
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md h-[80%] w-[23%]">
      <h2 className="text-xl font-bold mb-4">Form Section</h2>
      <form onSubmit={(e)=>{
        e.preventDefault()
        setdataofeachperson([...dataofeachperson, eachperson]);
          seteachperson({ username: '', company: '', phone: '', favourite: false });
      }}>
        {/* Add form fields here */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            onChange={(e)=>{
                seteachperson({...eachperson, username : e.target.value})
                console.log(eachperson);
                
            }}
            value={eachperson.username}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Company Name</label>
          <input
            onChange={(e)=>{
                seteachperson({...eachperson,company : e.target.value })
            }}
            value={eachperson.company}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter Company Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Phone</label>
          <input
            onChange={(e)=>{
                seteachperson({...eachperson,phone : e.target.value})
            }}
            value={eachperson.phone}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter Your PhoneNumber"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            onChange={(e)=>{
                seteachperson({...eachperson, favourite : e.target.checked})
                
            }}
            type="checkbox"
            id="favorite"
            className="mr-2"
          />
          <label htmlFor="favorite" className="text-gray-700">
            Mark as Favorite
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSection;
