import { useCallback } from "react";

const UseCloseSidebar = () => {
  const closeSidebar = useCallback((drawerId) => {
    const drawerInput = document.getElementById(drawerId);
    if (drawerInput) drawerInput.checked = false;
  }, []);

  return closeSidebar;
};

export default UseCloseSidebar;
