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
        state.data = null; // Сброс состояния данных при запросе
        state.isLoading = true; // Установка флага загрузки
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false; // Остановка флага загрузки
        state.data = action.payload.items; // Сохранение массива кемперов
        state.nextPage = action.payload.items.length === 8; // Установка флага наличия следующей страницы
        state.total = action.payload.total; // Сохранение общего количества
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false; // Остановка флага загрузки
        state.error = action.payload || action.error.message; // Сохранение ошибки
        state.nextPage = false; // Сброс флага следующей страницы
      })
      // Обработка getMoreCampers
      .addCase(getMoreCampers.pending, (state) => {
        state.isLoading = true; // Установка флага загрузки
        state.error = null; // Сброс ошибки
      })
      .addCase(getMoreCampers.fulfilled, (state, action) => {
        state.isLoading = false; // Остановка флага загрузки
        state.data = [...state.data, ...action.payload.items]; // Добавление новых кемперов
        state.nextPage = action.payload.items.length === 4; // Установка флага наличия следующей страницы
      })
      .addCase(getMoreCampers.rejected, (state, action) => {
        state.isLoading = false; // Остановка флага загрузки
        state.error = action.payload || action.error.message; // Сохранение ошибки
        state.nextPage = false; // Сброс флага следующей страницы
      });
  },
});

// Экспорт редьюсера
export const campersReducer = campersSlice.reducer;
