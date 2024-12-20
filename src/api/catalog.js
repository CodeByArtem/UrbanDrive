import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"


export const instance = axios.create({
    baseURL: BASE_URL,
    params: {
      limit: 4,
    },
  });
  
  export const fetchCampers = (params) => {
    const date = instance.get("/campers", { params });
    return date;
  };
  
export const fetchCamper = async (id) => {
  try {
   
    const response = await instance.get(`/campers/${id}`);
  
    return response.data;
  } catch (error) {
    console.error("Error fetching camper:", error); 
    throw error; 
  }
};
