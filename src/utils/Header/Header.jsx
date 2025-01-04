import React from "react";

const Header = ({children}) => {
  return (
    <div className="pt-20 lg:pt-32 pb-5">
      <div className="flex justify-between items-center  flex-col">
        <h1 className="lg:text-7xl text-6xl font-bold tracking-widest text-center">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;
