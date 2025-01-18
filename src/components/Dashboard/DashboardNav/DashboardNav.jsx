import Link from "next/link";
import React from "react";

const DashboardNav = ({ pathname }) => {
  const activeDash = (linkPath) => {
    // Ensure exact matches for static paths and prefix match for dynamic paths
    if (linkPath === "/my-account") {
      return pathname === linkPath ? "btn-secondary" : "btn-ghost";
    }
    return pathname.startsWith(linkPath) ? "btn-secondary" : "btn-ghost";
  };

  return (
    <>
      <Link
        href={"/my-account"}
        className={`btn justify-start text-sm ${activeDash(
          "/my-account"
        )} rounded-none`}
      >
        Dashboard
      </Link>
      <Link
        href={"/my-account/order"}
        className={`btn justify-start text-sm ${activeDash(
          "/my-account/order"
        )} rounded-none`}
      >
        Orders
      </Link>
      <Link
        href={"/my-account/address"}
        className={`btn justify-start text-sm ${activeDash(
          "/my-account/address"
        )} rounded-none`}
      >
        Addresses
      </Link>
      <Link
        href={"/my-account/account-details"}
        className={`btn justify-start text-sm ${activeDash(
          "/my-account/account-details"
        )} rounded-none`}
      >
        Account details
      </Link>
      <Link
        href={"/my-account/my-wishlist"}
        className={`btn justify-start text-sm  ${activeDash(
          "/my-account/my-wishlist"
        )} rounded-none`}
      >
        Wishlist
      </Link>
      <div
        className={`btn justify-start text-sm ${activeDash(
          "/my-account/byeBye"
        )} rounded-none`}
      >
        Logout
      </div>
    </>
  );
};

export default DashboardNav;
