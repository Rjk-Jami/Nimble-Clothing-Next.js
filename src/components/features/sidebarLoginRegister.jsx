import { IoClose } from "react-icons/io5";
import Underline from "../design/underline";

const SidebarLoginRegister = () => {
  return (
    <div>
      <div className="text-base font-semibold flex justify-between">
        <span>Sign in</span>
        <label htmlFor={"my-drawer-4"} aria-label=" close sidebar">
          <IoClose className="text-2xl" />
        </label>
      </div>
     <Underline height={"h-[1px]"} width={"w-full"}></Underline>
    </div>
  );
};

export default SidebarLoginRegister;
