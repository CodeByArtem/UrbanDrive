const searchParamsName = [
  { name: "ac", searchKey: "AC" },
  { name: "kitchen", searchKey: "kitchen" },
  { name: "tv", searchKey: "TV" },
  { name: "bathroom", searchKey: "bathroom" },
];

export const getSearchParams = (searchParams) => {
  const currentSearchParams = {};

  // Проверка стандартных фильтров
  searchParamsName.forEach(({ name, searchKey }) => {
    const value = searchParams.get(name);
    if (value) {
      currentSearchParams[searchKey] = true; // Устанавливаем как true, если параметр присутствует
    }
  });

  const location = searchParams.get("location");
  const transmission = searchParams.get("transmission"); // Получаем значение transmission
  const form = searchParams.get("vehicleTypes");

  // Обработка параметров
  if (location && location.trim()) {
    currentSearchParams.location = location.trim();
  }
  
  // Обработка transmission для автоматической и механической коробки передач
  if (transmission) {
    currentSearchParams.transmission = transmission; // Устанавливаем transmission как есть
  }

  if (form) {
    currentSearchParams.form = form;
  }

  return currentSearchParams;
};
