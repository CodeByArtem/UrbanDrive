export const selectCampers = (state) => state.campers.data;
export const selectIsFetching = (state) => state.campers.isLoading;
export const selectIsNextPage = (state) => state.campers.nextPage;
export const selectError = (state) => state.campers.error;