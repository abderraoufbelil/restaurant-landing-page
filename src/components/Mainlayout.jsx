import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <div className="   w-full   min-w-[screen] h-full  flex flex-nowrap md:flex-wrap items-start  bg-transparent ">
      {children}
    </div>
  );
};

export default Mainlayout;
