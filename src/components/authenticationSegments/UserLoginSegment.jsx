"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEye, IoEyeOff } from "react-icons/io5"; // Import icons for show/hide
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setIsHidePassword } from "../../../redux/utils/stateControllerSlice";
import { useLoginMutation } from "../../../redux/auth/authApi";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { removeErrorMassage, setErrorMassage } from "../../../redux/auth/authSlice";
import UseCloseSidebar from "@/hooks/UseCloseSidebar";
import { handleCloseSidebar } from "../features/sidebarLoginRegister";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const UserLoginSegment = () => {
  const router = useRouter()
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
  const isHide = useSelector((state) => state.stateController.isHidePassword);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const closeSidebar = UseCloseSidebar();
  // console.log(isSuccess, "isSuccess");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      // console.log(values);
      const { email, password } = values;
      try {
        const loginUser = await login({ email, password });
        
        if(loginUser?.error){
          // console.log(loginUser?.error.data.message, "loginUser");
         const  errorMassage =  loginUser?.error.data.message
          dispatch(setErrorMassage({errorMassage}))
          setTimeout(() => {
            dispatch(removeErrorMassage())
          }, 5000);
        
          if (!pathname === "/my-account") {
            router.push('/my-account')
          }
          closeSidebar("my-drawer-4")
        }
        else{
          dispatch(removeErrorMassage())
        }
      } catch (error) {
       
      }
    
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;
  // console.log(isSuccess, "isSuccess3");
  // Toggle password visibility

  return (
    <div className="max-w-md mx-auto ">
      <div className="">{isLoading && <Loading></Loading>}</div>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="user@gmail.com"
            onChange={handleChange}
            value={values.email}
            className={`w-full px-3 py-2  text-sm font-thin border rounded-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            aria-describedby={errors.email ? "email-error" : ""}
          />
        </div>

        {/* Password Field */}
        <div className="mb-5 relative">
          <label className="block text-sm font-semibold mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            name="password"
            placeholder="user@gmail.com"
            type={isHide ? "password" : "text"} // Toggle between password and text
            onChange={handleChange}
            value={values.password}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md`}
            aria-describedby={
              errors.password && touched.password ? "password-error" : ""
            }
          />
          {/* Show/Hide Password Button */}
          <button
            type="button"
            onClick={() => dispatch(setIsHidePassword(!isHide))}
            className="absolute inset-y-0 right-2  items-center justify-center "
            aria-label={isHide ? "Show password" : "Hide password"}
          >
            {isHide ? (
              <IoEyeOff className="mt-[1.5rem] " size={20} />
            ) : (
              <IoEye className="mt-[1.5rem] " size={20} />
            )}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-3 mb-4 w-full uppercase font-bold btn btn-primary rounded-none "
        >
          login
        </button>
        <div className=" flex justify-between">
          {/* remember me */}
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              onChange={handleChange}
              checked={values.rememberMe}
              className=" h-4 w-4 "
            />
            <span className="ml-2 text-sm font-thin  ">Remember me</span>
          </label>
          {/* lost section */}
          <div className="">
            <Link onClick={()=>handleCloseSidebar("my-drawer-4")} className="text-sm font-thin text-error" href={"/forget-password"}>
              Lost your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserLoginSegment;
