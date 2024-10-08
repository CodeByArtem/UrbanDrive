import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUbers } from "../../api/catalog";



export const getUbers = createAsyncThunk(
    "advert/getUbers",
    async (params, thunkAPI) => {
        try {
            const res = await fetchUbers(params);
            return res.data;
        }catch (err) {
            const {response} = err;
            if (response?.status === 404) return [];
            return thunkAPI.rejectWithValue("Something went wrong!")
        }
    }
);


export const getMoreUber = createAsyncThunk(
    "advert/getMoreUber",
    async (params, thunkAPI) => {
        try {
            const res =await fetchUbers(params);
            return res.data;
        }catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);