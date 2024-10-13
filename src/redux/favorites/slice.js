import { createSlice } from "@reduxjs/toolkit";
import { FAVORITES_INI_STATE } from "./initialState";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: FAVORITES_INI_STATE,
  reducers: {
    setFavorite(state, action) {
      const { id } = action.payload; 

      const index = state.data.findIndex((item) => item.id === id);
      
      if (index !== -1) {
        state.data = state.data.filter((item) => item.id !== id);
      } else {
        state.data = [...state.data, action.payload]; 
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorite } = favoritesSlice.actions;
