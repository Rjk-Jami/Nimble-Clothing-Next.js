const UseGetClassForSelectForm = ({ theme }) => {
  const lightThemeStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? "1px solid #000000" : "1px solid #d1d5db",
      borderRadius: "0px",
      padding: "0.1rem",
      boxShadow: "none",
      lineHeight: "1.25rem",
      fontSize: "0.875rem",
      fontWeight: "100",
      outline: state.isFocused ? "1px solid #000000" : "none",
      "&:hover": {
        borderColor: "",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
      border: "1px solid #e2e8f0",
      borderRadius: "0px",
    }),
    option: (base, state) => ({
      ...base,
      padding: "0.5rem",
      cursor: "pointer",
      backgroundColor: state.isFocused ? "#000000" : "white",
      color: state.isFocused ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: "",
      },
    }),
  };

  const darkThemeStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? "1px solid #ffffff" : "1px solid #d1d5db",
      borderRadius: "0px",
      padding: "0.1rem",
      boxShadow: "none",
      lineHeight: "1.25rem",
      fontSize: "0.875rem",
      fontWeight: "100",
      backgroundColor: "#121212",
      outline: state.isFocused ? "1px solid #ffffff" : "none",
      "&:hover": {
        borderColor: "",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
      border: "1px solid #e2e8f0",
      borderRadius: "0px",
    }),
    option: (base, state) => ({
      ...base,
      padding: "0.5rem",
      cursor: "pointer",
      backgroundColor: state.isSelected
        ? "#ffffff"
        : state.isFocused
        ? "#000000"
        : "#ffffff",
      color: state.isSelected
        ? "#000000"
        : state.isFocused
        ? "#ffffff"
        : "#000000",
      "&:hover": {
        backgroundColor: state.isSelected ? "" : "",
      },
    }),
    input: (base) => ({
      ...base,
      color: "#ffffff",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#ffffff",
    }),
  };

  return theme === "emerald" ? lightThemeStyles : darkThemeStyles;
};

export default UseGetClassForSelectForm;
