import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEye, IoEyeOff } from "react-icons/io5"; // Import icons for show/hide
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setIsHidePassword } from "../../../redux/utils/stateControllerSlice";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const UserLoginSegment = () => {
  const isHide = useSelector((state)=>(state.stateController.isHidePassword))
const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } = formik;

  // Toggle password visibility

  return (
    <div className="max-w-md mx-auto ">
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
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
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            name="password"
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
            onClick={()=>dispatch(setIsHidePassword(!isHide))}
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
        <Link className="text-sm font-thin text-error" href={'/'}>Lost your password?</Link>
      </div>
        </div>
      </form>
    
    </div>
  );
};

export default UserLoginSegment;
