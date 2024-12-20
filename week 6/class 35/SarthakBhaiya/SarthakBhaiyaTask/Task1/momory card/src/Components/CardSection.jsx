import React from 'react';

const CardSection = ({ dataofeachperson, setdataofeachperson }) => {
  return (
    <div className="rounded w-[500px]">
      {/* Cards Flex Container */}
      <div className="flex flex-col w-full flex-wrap gap-4 justify-start">
        {dataofeachperson.map((person, index) => (
          <div key={index} className="relative p-4 bg-gray-100 border rounded shadow w-full">
            <h3 className="text-lg font-bold">{person.username}</h3>
            <p className="text-sm text-gray-600">Company: {person.company}</p>
            <p className="text-sm text-gray-600">Phone: {person.phone}</p>

            {/* Conditional rendering for the "favorite" section */}
            {person.favourite && (
              <div className="mt-2 p-2 bg-yellow-200 text-center rounded w-[30%]">
                <span className="text-sm font-semibold">Favorite</span>
              </div>
            )}

            {/* Delete Button with logic inside onClick */}
            <button 
              onClick={() => {
                // Delete logic: remove person from the array
                const updatedData = dataofeachperson.filter((_, i) => i !== index);
                setdataofeachperson(updatedData); // Update the state with the filtered array
              }} 
              className="absolute bottom-2 right-2 p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
