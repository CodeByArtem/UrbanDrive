import { createSlice } from "@reduxjs/toolkit";
import { CATALOG_INITIAL_STATE } from "./initialState";
import { getMoreUber, getUbers } from "./operations";



const uberSlice = createSlice({
    name: "uber",
    initialState: CATALOG_INITIAL_STATE,
    extraReducers: (builder) =>{
        builder
        .addCase(getUbers.pending, (state)=> {
            state.error = null;
            state.data = null;
        })
        .addCase(getUbers.fulfilled, (state, action)=> {
            state.error = action.payload;
            state.nextPage = action.payload.length === 3;
        })
        .addCase(getUbers.rejected,(state, action) => {
            state.error = action.payload;
            state.nextPage = false;
        })
        .addCase(getMoreUber.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = [...state.data, ...action.payload];
            state.nextPage = action.payload.length === 4;
          })
          .addCase(getMoreUber.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.nextPage = false;
          });
    },
});
export const ubersReducer = uberSlice.reducer;