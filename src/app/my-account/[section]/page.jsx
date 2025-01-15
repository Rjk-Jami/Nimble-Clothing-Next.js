"use client";
import NotFound from "@/app/not-found";
import DashboardAccountDetails from "@/components/Dashboard/DashboardNavCompoments/DashboardAccountDetails/DashboardAccountDetails";
import DashboardAddresses from "@/components/Dashboard/DashboardNavCompoments/DashboardAddresses/DashboardAddresses";
import DashboardOrder from "@/components/Dashboard/DashboardNavCompoments/DashboardOrder/DashboardOrder";
import DashboardWishlist from "@/components/Dashboard/DashboardNavCompoments/DashboardWishlist/DashboardWishlist";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSection = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const renderDashboard = () => {
    switch (pathname) {
      case "/my-account/order":
        return <DashboardOrder></DashboardOrder>;
      case "/my-account/address":
        return <DashboardAddresses></DashboardAddresses>;
      case "/my-account/account-details":
        return <DashboardAccountDetails></DashboardAccountDetails> ;
      case "/my-account/wishlist":
        return <DashboardWishlist></DashboardWishlist>;
      default:
       return <NotFound></NotFound>
    }
  };

  return <>
    {renderDashboard()}
  </>;
};

export default DashboardSection;
