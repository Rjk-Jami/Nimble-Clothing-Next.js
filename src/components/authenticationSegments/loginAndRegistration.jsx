"use client";
import React from "react";
import UserLoginSegment from "./UserLoginSegment";
import UserRegisterSegment from "./userRegisterSegment";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginPage } from "../../../redux/utils/stateControllerSlice";
import ErrorAlert from "../Alert/ErrorAlert";
import UseCloseSidebar from "@/hooks/UseCloseSidebar";

const LoginAndRegistration = () => {
  const isLoginPage = useSelector((state) => state.stateController.isLoginPage);
  const errorMassage = useSelector((state) => state.auth.errorMassage);
  const dispatch = useDispatch();
  // const [isLoginPage, setIsLoginPage] = useState(false);
  
  return (
    <div className="mx-8 lg:mx-0">
      <div className="">
        {errorMassage && <ErrorAlert>{errorMassage}</ErrorAlert>}
      </div>
      <div className=" grid grid-cols-1 grid-flow-row lg:gap-20 gap-8 lg:grid-cols-2 items-center  ">
        <div className="">
          <div className="font-extrabold text-4xl mb-8">
            {isLoginPage ? "Login" : "Sign up"}
          </div>
          {isLoginPage ? (
            <UserLoginSegment></UserLoginSegment>
          ) : (
            <UserRegisterSegment></UserRegisterSegment>
          )}
        </div>
        <div className="flex lg:hidden divider w-3/4 mx-auto ">OR</div>
        <div className="flex flex-col gap-5 justify-center items-center max-w-md h-full">
          <h1 className="text-2xl font-bold uppercase">
            {isLoginPage ? "login" : "Sign up"}
          </h1>
          <h5 className="text-sm text-center  lg:px-14">
            Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we&apos;ll get a new
            account set up for you in no time. We will only ask you for
            information necessary to make the purchase process faster and
            easier.
          </h5>
          <button
            onClick={() => dispatch(setIsLoginPage(!isLoginPage))}
            className="btn btn-ghost btn-outline w-1/2 rounded-none uppercase"
          >
            {isLoginPage ? "Sign up" : "login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegistration;
