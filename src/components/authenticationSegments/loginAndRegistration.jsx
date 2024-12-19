"use client";
import React, { useState } from "react";

const LoginAndRegistration = () => {
  const [isClick, setClick] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container">
      <div className="">{isClick ? "login" : "register"}</div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <header className="text-2xl font-bold uppercase">
          {isClick ? "login" : "Register"}
        </header>
        <sub className="text-sm text-center px-8 lg:px-14">
          {isClick
            ? "Logging into your account allows you to access your order history, manage your personal details, and enjoy a faster checkout experience. Simply enter your credentials below, and you'll be back to exploring in no time. Your information is always secure with us, ensuring a smooth and hassle-free shopping journey."
            : "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier."}
        </sub>
        <button
          onClick={() => setClick(!isClick)}
          className="btn btn-ghost btn-outline w-1/6 rounded-none uppercase"
        >
          {isClick ? "Register" : "login"}
        </button>
      </div>
    </div>
  );
};

export default LoginAndRegistration;
