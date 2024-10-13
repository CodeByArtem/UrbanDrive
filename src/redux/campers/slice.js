import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getMoreCampers } from "./operations";

const initialState = {
  data: [],
  isFetching: false,
  error: null,
  isNextPage: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data = action.payload; 
        state.isNextPage = action.payload.length > 0; 
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        state.data = []; 
      })
      .addCase(getMoreCampers.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getMoreCampers.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data = [...state.data, ...action.payload]; 
      })
      
      .addCase(getMoreCampers.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload; 
      });
  },
});

export const campersReducer = campersSlice.reducer;
