import axios from "axios";

const BASE_URL = "https://6676c618145714a1bd72bfc3.mockapi.io"


export const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        limit: 12,
    },
});

export const fetchUbers = async (params) => {
    const date = await instance.get("/advert", { params });
   
    return date;
};




export const fetchUber = (id) => {
    const date = instance.get(`/advert/${id}`);
    return date

};