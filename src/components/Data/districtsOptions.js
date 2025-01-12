export const districtsOptions = [
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
  
  export const filterOptions = (inputValue, options) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  export const loadOptions = (inputValue, options) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue, options));
      }, 1000);
    });
  