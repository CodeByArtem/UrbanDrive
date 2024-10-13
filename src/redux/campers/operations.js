import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../api/catalog";

export const selectCampers = (state) => state.campers.data;

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (params, thunkAPI) => {
    try {
      const res = await fetchCampers(params);
      // Проверяем, возвращает ли API данные в нужной структуре
      if (!res.data || !Array.isArray(res.data.items)) {
        return thunkAPI.rejectWithValue("Invalid data format");
      }
      // Проверяем, если нет кемперов
      if (res.data.items.length === 0) {
        return thunkAPI.rejectWithValue("No campers found for the selected filters");
      }
      return res.data.items; // Возвращаем массив кемперов
    } catch (err) {
      const { response } = err;
      if (response?.status === 404) return thunkAPI.rejectWithValue("No campers found for the selected filters");
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
