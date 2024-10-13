import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../api/catalog";

export const selectCampers = (state) => state.campers.data;

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (params, thunkAPI) => {
    try {
      const res = await fetchCampers(params);
      if (!res.data || !Array.isArray(res.data.items)) {
        return thunkAPI.rejectWithValue("Invalid data format");
      }
      return res.data;
    } catch (err) {
      const { response } = err;
      if (response?.status === 404) return thunkAPI.rejectWithValue([]);
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);

export const getMoreCampers = createAsyncThunk(
  "campers/getMoreCampers",
  async (params, thunkAPI) => {
    try {
      const res = await fetchCampers(params);
      if (!res.data || !Array.isArray(res.data.items)) {
        return thunkAPI.rejectWithValue("Invalid data format");
      }
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
