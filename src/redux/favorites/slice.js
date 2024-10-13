import { createSlice } from "@reduxjs/toolkit";
import { FAVORITES_INI_STATE } from "./initialState";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: FAVORITES_INI_STATE,
  reducers: {
    setFavorite(state, action) {
      const { id } = action.payload; // предполагаем, что используется _id

      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        // Если элемент уже в избранном, удаляем его
        state.data.splice(index, 1);
      } else {
        // Если элемент не в избранном, добавляем его
        state.data.push(action.payload);
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { setFavorite } = favoritesSlice.actions;
