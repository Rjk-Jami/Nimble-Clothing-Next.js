import UseGetClassForSelectForm from "@/hooks/UseGetClassForSelectForm";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import { setShippingAddress } from "../../../redux/shippingAddress/shippingAddressSlice";
import { loadOptions, districtsOptions } from "../Data/districtsOptions";

const ShippingAddress = () => {
  const theme = useSelector((state) => state.theme.theme);
  const shippingAddress = useSelector((state) => state.shippingAddress);
  const customStyles = UseGetClassForSelectForm({ theme });
  const [selectedDistrict, setSelectedDistrict] = useState(shippingAddress?.district);
  const [selectedCountry, setSelectedCountry] = useState(null);
const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Town:", event.target.town.value);
    // console.log("Zipcode:", event.target.zip.value);
    // console.log("District:", selectedDistrict);
    const shippingAddress = {
      town: event.target.town.value,
      zipcode: event.target.zip.value,
      district: selectedDistrict.value,
    };

    // Dispatch the action to update the Redux store
    dispatch(setShippingAddress(shippingAddress));
   
  };
// console.log(selectedDistrict ,"selectedDistrict" )
  const districtDefault = selectedDistrict
  ? { value: selectedDistrict, label: selectedDistrict }
  : null;

  const countriesOptions = [{ value: "Bangladesh", label: "Bangladesh" }];



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
          defaultValue={districtDefault}
          isClearable
          isSearchable
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
