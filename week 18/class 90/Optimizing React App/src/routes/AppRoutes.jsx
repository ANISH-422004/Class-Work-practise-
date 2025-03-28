import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "../components/Page1";
import Loader from "../components/Loader";
// import Page2 from "../components/Page2";  direct pushing in single file
 
const Page2 = lazy(()=>import("../components/Page2")) // lazy loading will make the page2 component load only when it is required and not at the start of the application : and it will reduce the initial load time of the application 


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Suspense fallback={<Loader/>} ><Page2 /></Suspense>} />

        
      </Routes>
    </>
  );
};

export default AppRoutes;

//<suspence> :: Suspense is a built-in React component that allows you to handle asynchronous rendering while waiting for a component to load. It is commonly used with React.lazy() to enable lazy loading (code-splitting)

// if we dont write this fallback={} then it will show a blank screen when the page is loading as react is not able to find the component to load when it just requested for that file to load form server 