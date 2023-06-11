import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
const initialState = {
  searchProducts: [],
  searchProductsStatus: STATUS.IDLE,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state, action) => {
      state.searchProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncSerchProduct.pending, (state, action) => {
        state.searchProductsStatus = state.LOADING;
      })
      .addCase(fetchAsyncSerchProduct.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.searchProductsStatus = state.SUCCEEDED;
      })
      .addCase(fetchAsyncSerchProduct.rejected, (state, action) => {
        state.searchProductsStatus = state.FAILED;
      });
  },
});
export const fetchAsyncSerchProduct = createAsyncThunk(
  "product-search/fetch",
  async (searchTerm) => {
    const reponse = await fetch(`${BASE_URL}products/search?q=${searchTerm}`);
    const date = await reponse.json();
    return date.products;
  }
);
export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) =>
  state.search.searchProductsStatus;
export default searchSlice.reducer;
