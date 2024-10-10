import { createSlice } from "@reduxjs/toolkit";
import FAVORITES_INI_STATE from "./initialState"

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: FAVORITES_INI_STATE,
  reducers: {
    setFavorite(state, action) {
      const { _id } = action.payload;

      const index = state.data.findIndex((item) => item._id === _id);
      if (index !== -1) state.data.splice(index, 1);
      else state.data.push(action.payload);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorite } = favoritesSlice.actions;