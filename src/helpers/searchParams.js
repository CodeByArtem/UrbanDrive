const searchParamsName = [
  { name: "ac", searchKey: "AC" },
  { name: "kitchen", searchKey: "kitchen" },
  { name: "tv", searchKey: "TV" },
  { name: "shower", searchKey: "bathroom" },
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
