const searchParamsName = [
  { name: "ac", searchKey: "isAirConditioner" },
  { name: "kitchen", searchKey: "isKitchen" },
  { name: "tv", searchKey: "isTV" },
  { name: "shower", searchKey: "isShowerOrWC" },
];

export const getSearchParams = (searchParams) => {
  const currentSearchParams = {};

  searchParamsName.forEach(({ name, searchKey }) => {
    const value = searchParams.get(name);
    if (value) {
      currentSearchParams[searchKey] = true; // Устанавливаем как true, если параметр присутствует
    }
  });

  const location = searchParams.get("location");
  const transmission = searchParams.get("automatic");
  const form = searchParams.get("vehicleTypes");

  if (location && location.trim()) {
    currentSearchParams.location = location.trim();
  }
  if (transmission === "on") {
    currentSearchParams.transmission = "automatic";
  }
  if (form) {
    currentSearchParams.form = form;
  }

  return currentSearchParams;
};
