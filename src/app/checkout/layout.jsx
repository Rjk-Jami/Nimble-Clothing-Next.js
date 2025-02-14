"use client";
import Footer from "@/components/Footer";
import Header from "@/utils/Header/Header";
import React from "react";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const handleOpenSidebar = (drawerId) => {
    const drawerInput = document.getElementById(drawerId);
    if (drawerInput) drawerInput.checked = true;
  };

  const handleLogin = () => {
    handleOpenSidebar("my-drawer-4");
  };
  return (
    <div>
      <Header>Checkout</Header>
      <div className="pt-10 w-11/12 xl:w-10/12 mx-auto">
        {user?.email ? (
          ""
        ) : (
          <div className="flex gap-2">
            <h1>Returning customer?</h1>
            <button
              className="underline-offset-1 underline font-bold"
              onClick={handleLogin}
            >
              Click here to login
            </button>
          </div>
        )}
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
