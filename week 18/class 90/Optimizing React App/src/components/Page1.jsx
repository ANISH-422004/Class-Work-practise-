import React from "react";
import useInternetOnlineStatus from "../utils/hooks/useInternetOnlineStatus";

const Page1 = () => {
  const isOnline = useInternetOnlineStatus();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">Page 1</h1>
      <h2 className="flex gap-2 justify-center items-center">
        Online Status :{" "}
        <span>{
          isOnline ? (
            <h1 className="text-green-400">Online</h1>
          ) : (
            <h1 className="text -red-400">Offline</h1>
          )
        }</span>
      </h2>
    </div>
  );
};

export default Page1;
