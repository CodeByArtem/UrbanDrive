export const selectUbers = (state) => state.advert.data;
export const selectIsFetching = (state) => state.advert.isLoading;
export const selectIsNextPage = (state) => state.advert.nextPage;
export const selectError = (state) => state.advert.error;