import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_INITIAL_STATE } from "./initialState";
import { getCampers, getMoreCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: CATALOG_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.error = null;
        state.data = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.nextPage = action.payload.length === 8;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.nextPage = false;
      })
      // getMoreCampers
      .addCase(getMoreCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMoreCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...state.data, ...action.payload];
        state.nextPage = action.payload.length === 4;
      })
      .addCase(getMoreCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.nextPage = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;