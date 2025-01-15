import Link from "next/link";
import React from "react";

const DashboardNav = ({ pathname }) => {
    const activeDash = (linkPath) => (pathname === linkPath ? "btn-secondary" : "btn-ghost");;
  return (
    <>
      <Link
        href={"/my-account"}
        className={`btn justify-start  ${activeDash("/my-account")} rounded-none`}
      >
        Dashboard
      </Link>
      <Link
        href={"/my-account/order"}
        className={`btn justify-start  ${activeDash("/my-account/order")} rounded-none`}
      >
        Orders
      </Link>
      <Link
        href={"/my-account/address"}
        className={`btn justify-start  ${activeDash("/my-account/address")} rounded-none`}
      >
        Addresses
      </Link>
      <Link
        href={"/my-account/account-details"}
        className={`btn justify-start  ${activeDash("/my-account/account-details")} rounded-none`}
      >
        Account details
      </Link>
      <Link
        href={"/my-account/wishlist"}
        className={`btn justify-start   ${activeDash("/my-account/wishlist")} rounded-none`}
      >
        Wishlist
      </Link>
      <div className={`btn justify-start ${activeDash("/my-account/byeBye")} rounded-none`}>Logout</div>
    </>
  );
};

export default DashboardNav;
