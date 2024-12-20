const searchParamsName = [
  { name: "ac", searchKey: "AC" },
  { name: "kitchen", searchKey: "kitchen" },
  { name: "tv", searchKey: "TV" },
  { name: "bathroom", searchKey: "bathroom" },
];

export const getSearchParams = (searchParams) => {
  const currentSearchParams = {};

  searchParamsName.forEach(({ name, searchKey }) => {
    const value = searchParams.get(name);
    if (value) {
      currentSearchParams[searchKey] = true;
    }
  });

  const location = searchParams.get("location");
  const transmission = searchParams.get("transmission");
  const form = searchParams.get("vehicleTypes");

  if (location && location.trim()) {
    currentSearchParams.location = location.trim();
  }
  
  if (transmission) {
    currentSearchParams.transmission = transmission;
  }

  if (form) {
    currentSearchParams.form = form;
  }

  return currentSearchParams;
};
