import React, { useEffect, useRef } from "react";

const Page1 = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); // This will focus the input element on render 
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <input
                type="text"
                className="w-1/2 h-10 px-4  border-[3.6px] rounded-md focus:outline-none focus:border-violet-500"
                ref={inputRef}
                placeholder="Enter text here"
            />
        </div>
    );
};

export default Page1;
