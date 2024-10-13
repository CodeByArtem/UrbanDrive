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
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.items;
        state.nextPage = action.payload.items.length === 8;
        state.total = action.payload.total;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
        state.nextPage = false;
      })
      .addCase(getMoreCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMoreCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        const existingIds = new Set(state.data.map(camper => camper.id));
        const newCampers = action.payload.items.filter(camper => !existingIds.has(camper.id));
        state.data = [...state.data, ...newCampers];
        state.nextPage = action.payload.items.length === 4;
      })
      .addCase(getMoreCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
        state.nextPage = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;
