import UseGetClassForSelectForm from "@/hooks/UseGetClassForSelectForm";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import { setShippingAddress } from "../../../redux/shippingAddress/shippingAddressSlice";

const ShippingAddress = () => {
  const theme = useSelector((state) => state.theme.theme);
  const shippingAddress = useSelector((state) => state.shippingAddress);
  const customStyles = UseGetClassForSelectForm({ theme });
  const [selectedDistrict, setSelectedDistrict] = useState(shippingAddress?.district);
  const [selectedCountry, setSelectedCountry] = useState(null);
const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Town:", event.target.town.value);
    console.log("Zipcode:", event.target.zip.value);
    console.log("District:", selectedDistrict);
    const shippingAddress = {
      town: event.target.town.value,
      zipcode: event.target.zip.value,
      district: selectedDistrict.value,
    };

    // Dispatch the action to update the Redux store
    dispatch(setShippingAddress(shippingAddress));
   
  };

  const districtsOptions = [
    { value: "Bagerhat", label: "Bagerhat" },
    { value: "Bandarban", label: "Bandarban" },
    { value: "Barguna", label: "Barguna" },
    { value: "Barishal", label: "Barishal" },
    { value: "Bhola", label: "Bhola" },
    { value: "Bogura", label: "Bogura" },
    { value: "Brahmanbaria", label: "Brahmanbaria" },
    { value: "Chandpur", label: "Chandpur" },
    { value: "Chattogram", label: "Chattogram" },
    { value: "Chuadanga", label: "Chuadanga" },
    { value: "CoxsBazar", label: "Cox's Bazar" },
    { value: "Cumilla", label: "Cumilla" },
    { value: "Dhaka", label: "Dhaka" },
    { value: "Dinajpur", label: "Dinajpur" },
    { value: "Faridpur", label: "Faridpur" },
    { value: "Feni", label: "Feni" },
    { value: "Gaibandha", label: "Gaibandha" },
    { value: "Gazipur", label: "Gazipur" },
    { value: "Gopalganj", label: "Gopalganj" },
    { value: "Habiganj", label: "Habiganj" },
    { value: "Jamalpur", label: "Jamalpur" },
    { value: "Jashore", label: "Jashore" },
    { value: "Jhalokati", label: "Jhalokati" },
    { value: "Jhenaidah", label: "Jhenaidah" },
    { value: "Joypurhat", label: "Joypurhat" },
    { value: "Khagrachhari", label: "Khagrachhari" },
    { value: "Khulna", label: "Khulna" },
    { value: "Kishoreganj", label: "Kishoreganj" },
    { value: "Kurigram", label: "Kurigram" },
    { value: "Kushtia", label: "Kushtia" },
    { value: "Lakshmipur", label: "Lakshmipur" },
    { value: "Lalmonirhat", label: "Lalmonirhat" },
    { value: "Madaripur", label: "Madaripur" },
    { value: "Magura", label: "Magura" },
    { value: "Manikganj", label: "Manikganj" },
    { value: "Meherpur", label: "Meherpur" },
    { value: "Moulvibazar", label: "Moulvibazar" },
    { value: "Munshiganj", label: "Munshiganj" },
    { value: "Mymensingh", label: "Mymensingh" },
    { value: "Naogaon", label: "Naogaon" },
    { value: "Narail", label: "Narail" },
    { value: "Narayanganj", label: "Narayanganj" },
    { value: "Narsingdi", label: "Narsingdi" },
    { value: "Natore", label: "Natore" },
    { value: "Nawabganj", label: "Nawabganj" },
    { value: "Netrakona", label: "Netrakona" },
    { value: "Nilphamari", label: "Nilphamari" },
    { value: "Noakhali", label: "Noakhali" },
    { value: "Pabna", label: "Pabna" },
    { value: "Panchagarh", label: "Panchagarh" },
    { value: "Patuakhali", label: "Patuakhali" },
    { value: "Pirojpur", label: "Pirojpur" },
    { value: "Rajbari", label: "Rajbari" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Rangamati", label: "Rangamati" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Satkhira", label: "Satkhira" },
    { value: "Shariatpur", label: "Shariatpur" },
    { value: "Sherpur", label: "Sherpur" },
    { value: "Sirajganj", label: "Sirajganj" },
    { value: "Sunamganj", label: "Sunamganj" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Tangail", label: "Tangail" },
    { value: "Thakurgaon", label: "Thakurgaon" }
  ];

  const countriesOptions = [{ value: "Bangladesh", label: "Bangladesh" }];

  const filterOptions = (inputValue, options) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, options) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue, options));
      }, 1000);
    });

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <AsyncSelect
            defaultValue={countriesOptions[0]}
            onChange={setSelectedCountry}
            styles={customStyles}
            placeholder="Search Country..."
            cacheOptions
            defaultOptions
            loadOptions={(inputValue) => loadOptions(inputValue, countriesOptions)}
          />
        </div>
        <div className="mb-4">
          <AsyncSelect
          value={selectedDistrict}
            onChange={setSelectedDistrict}
            styles={customStyles}
            placeholder="Search District..."
            cacheOptions
            defaultOptions
            loadOptions={(inputValue) => loadOptions(inputValue, districtsOptions)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full py-2.5 px-2 text-sm font-thin border border-gray-300 rounded-none"
            defaultValue={shippingAddress?.town}
            placeholder="Town / City"
            type="text"
            name="town"
            id="town"
          />
        </div>
        <div className="mb-4">
          <input
          defaultValue={shippingAddress?.zipcode}
            className="w-full py-2.5 px-2 text-sm focus:outline-1 font-thin border border-gray-300 rounded-none"
            placeholder="Postcode / ZIP"
            type="number"
            name="zip"
            id="zip"
          />
        </div>
        <button
          className="w-full bg-black dark:bg-white dark:text-black text-white py-2 shadow dark:hover:bg-slate-200 hover:bg-zinc-900 transition text-center"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
