"use client";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSection = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const renderDashboard = () => {
    switch (pathname) {
      case "/my-account":
        return ;
      case "/my-account/order":
        return ;
      case "/my-account/address":
        return ;
      case "/my-account/account-details":
        return ;
      case "/my-account/wishlist":
        return ;
      default:
        null;
    }
  };

  return <div></div>;
};

export default DashboardSection;
