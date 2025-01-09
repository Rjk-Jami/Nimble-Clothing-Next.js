import React from "react";
import AsyncSelect from "react-select/async";

const ShippingAddress = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(" value:", event.target.town.value);
    console.log(" value:", event.target.zip.value);
  };
  // const customStyles = {
  //   control: (base) => ({
  //     ...base,
  //     border: "1px solid #d1d5db",
  //     borderRadius: "0px",         // Tailwind's `rounded-none`
  //     padding: "0.1rem",           // Tailwind's `p-2`
  //     boxShadow: "none",
  //     lineHeight: "1.25rem",
  //     fontSize: "0.875rem",
  //     fontWeight: "100",
  //     backgroundColor: document.documentElement.classList.contains("dark")
  //     ? "#1f2937" // Dark mode background
  //     : "white", // Light mode background
  //   color: document.documentElement.classList.contains("dark")
  //     ? "#e5e7eb" // Dark mode text
  //     : "#000000", // Light mode text
  //     "&:hover": {
  //       borderColor: "",
  //     },
  //   }),
  //   menu: (base) => ({
  //     ...base,
  //     backgroundColor: "white",
  //     border: "1px solid #e2e8f0",
  //     borderRadius: "0px",

  //   }),
  //   option: (base, state) => ({
  //     ...base,
  //     padding: "0.5rem",
  //     cursor: "pointer",
  //     backgroundColor: state.isFocused ? "#000000" : "white",
  //     color: state.isFocused ? "#ffffff" : "#000000",
  //     "&:hover": {
  //       backgroundColor: "",
  //     },
  //   }),
  // };
  const customStyles = {
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
        ? "#ffffff" // Black background for selected option
        : state.isFocused
        ? "#000000" // Light gray background for focused option
        : "#ffffff", // Default white background for other options
      color: state.isSelected
      ? "#000000" // Black background for selected option
      : state.isFocused
      ? "#ffffff" // Light gray background for focused option
      : "#000000", 
      "&:hover": {
        backgroundColor: "",
      },
    }),
    input: (base) => ({
      ...base,
      color: "#ffffff", // Input text color
    }),
    singleValue: (base) => ({
      ...base,
      color: "#ffffff", // Font color for selected value
    }),
  };

  const colourOptions = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Bogura", label: "Bogura" },
    { value: "Rajshahi", label: "Rajshahi" },
  ];
  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <AsyncSelect
            styles={customStyles}
            placeholder="Search District..."
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full py-2.5 px-2 text-sm font-thin border border-gray-300 rounded-none"
            placeholder="Town / City"
            type="text"
            name="town"
            id="town"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full py-2.5 px-2 text-sm focus:outline-1 font-thin border border-gray-300  text-white rounded-none"
            placeholder="Postcode / ZIP"
            type="number"
            name="zip"
            id="zip"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShippingAddress;
