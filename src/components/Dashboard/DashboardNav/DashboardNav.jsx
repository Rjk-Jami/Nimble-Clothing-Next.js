"use client"
import Link from "next/link";
import React from "react";
import { useLogoutMutation } from "../../../../redux/auth/authApi";
import { useSelector } from "react-redux";

const DashboardNav = ({ pathname }) => {
  const activeDash = (linkPath) => {
    // Ensure exact matches for static paths and prefix match for dynamic paths
    if (linkPath === "/my-account") {
      return pathname === linkPath ? "btn-secondary" : "btn-ghost";
    }
    return pathname.startsWith(linkPath) ? "btn-secondary" : "btn-ghost";
  };
const [logout, { isLoading, isError, error }] = useLogoutMutation();
const user = useSelector((state) => state?.auth?.user);
  const handleLogout = async () => {
    try {
      await logout({ user });
    } catch (error) {
      // console.log(error, "nav");
    }
  };
  return (
    <>
      <Link
        href={"/my-account"}
        className={`btn justify-start text-sm text-left  ${activeDash(
          "/my-account"
        )} rounded-none`}
      >
        Dashboard
      </Link>
      <Link
        href={"/my-account/order"}
        className={`btn justify-start text-sm text-left ${activeDash(
          "/my-account/order"
        )} rounded-none`}
      >
        Orders
      </Link>
      <Link
        href={"/my-account/address"}
        className={`btn justify-start text-sm text-left ${activeDash(
          "/my-account/address"
        )} rounded-none`}
      >
        Addresses
      </Link>
      <Link
        href={"/my-account/account-details"}
        className={`btn justify-start text-sm text-left ${activeDash(
          "/my-account/account-details"
        )} rounded-none`}
      >
        Account details
      </Link>
      <Link
        href={"/my-account/my-wishlist"}
        className={`btn justify-start text-sm text-left  ${activeDash(
          "/my-account/my-wishlist"
        )} rounded-none`}
      >
        Wishlist
      </Link>
      <div onClick={handleLogout}
        className={`btn justify-start text-sm text-left ${activeDash(
          "/my-account/byeBye"
        )} rounded-none`}
      >
        Logout
      </div>
    </>
  );
};

export default DashboardNav;
