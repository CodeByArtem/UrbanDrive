const searchParamsName = [
    { name: "ac", searchKey: "isAirConditioner" },
    { name: "kitchen", searchKey: "isKitchen" },
    { name: "tv", searchKey: "isTV" },
    { name: "shower", searchKey: "isShowerOrWC" },
  ];
  export const getSearchParams = (searchParams) => {
    const currentSearchParams = searchParamsName.reduce(
      (acc, { name, searchKey }) => {
        const value = searchParams.get(name);
        if (value) {
          acc[searchKey] = !!value;
          return acc;
        }
        return acc;
      },
      {}
    );
  
    const location = searchParams.get("location");
    const transmission = searchParams.get("automatic");
    const form = searchParams.get("vehicleTypes");
  
    if (location && location.trim()) {
      currentSearchParams.location = location.trim();
    }
    if (transmission) {
      currentSearchParams.transmission = "automatic";
    }
    if (form) {
      currentSearchParams.form = form;
    }
  
    return currentSearchParams;
  };