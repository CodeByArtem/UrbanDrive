const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatMeasurement = (value) => {
  return value.replace(/(\d)([a-zA-Z])/g, "$1 $2");
};

const addToResult = (result, iconName, text, styles = {}) => {
  result.push({
    iconName,
    text: capitalizeFirstLetter(text),
    styles,
  });
};

export const getCategories = (camper) => {
  const result = [];
  const {
    transmission, engine, kitchen, AC, bathroom, TV, radio,
    microwave, gas, water, refrigerator
  } = camper;

  if (transmission) addToResult(result, "automatic", transmission, { fill: "transparent", stroke: "#101828" });
  if (engine) addToResult(result, "petrol", engine);
  if (kitchen) addToResult(result, "kitchen", "Kitchen", { fill: "transparent", stroke: "#101828" });
  if (AC) addToResult(result, "ac", "AC");
  if (bathroom) addToResult(result, "bathroom", "Bathroom");
  if (TV) addToResult(result, "tv", "TV");
  if (radio) addToResult(result, "radio", "Radio");
  if (microwave) addToResult(result, "microwave", "Microwave", { fill: "transparent", stroke: "#101828" });
  if (gas) addToResult(result, "gas", "Gas");
  if (water) addToResult(result, "water", "Water", { fill: "transparent", stroke: "#101828" });
  if (refrigerator) addToResult(result, "freezer", "Refrigerator", { fill: "transparent", stroke: "#101828" });

  return result;
};

export const formatRentPrice = (price) => {
  return `€${price},00`;
};

export const getAllDetails = (camper) => {
  const styles = { fill: "transparent", stroke: "#101828" };
  const vehicle = [
    { title: "Form", value: capitalizeFirstLetter(camper.form) },
    { title: "Length", value: formatMeasurement(camper.length) },
    { title: "Width", value: formatMeasurement(camper.width) },
    { title: "Height", value: formatMeasurement(camper.height) },
    { title: "Tank", value: formatMeasurement(camper.tank) },
    { title: "Consumption", value: camper.consumption },
  ];

  const details = [];
  const { bathroom, TV, radio, microwave, gas, water } = camper;

  if (bathroom) addToResult(details, "toilet", "Bathroom");
  if (TV) addToResult(details, "tv", "TV", styles);
  if (radio) addToResult(details, "radio", "Radio", styles);
  if (microwave) addToResult(details, "microwave", "Microwave", styles);
  if (gas) addToResult(details, "gas", "Gas");
  if (water) addToResult(details, "water", "Water", styles);

  return { vehicle, details };
};
