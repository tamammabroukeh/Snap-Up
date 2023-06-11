import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductOfCategory.pending, (state, action) => {
        state.categoryProductsStatus = state.LOADING;
      })
      .addCase(fetchAsyncProductOfCategory.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.categoryProductsStatus = state.SUCCEEDED;
      })
      .addCase(fetchAsyncProductOfCategory.rejected, (state, action) => {
        state.categoryProductsStatus = state.FAILED;
      });
  },
});
export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const reponse = await fetch(`${BASE_URL}products/categories`);
    const data = await reponse.json();
    return data;
  }
);
export const fetchAsyncProductOfCategory = createAsyncThunk(
  "category-products/fetch",
  async (category) => {
    const reponse = await fetch(`${BASE_URL}products/category/${category}`);
    const data = await reponse.json();
    return data.products;
  }
);
export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) =>
  state.category.categoryProducts;
export const getCategoryProdctsStatus = (state) =>
  state.category.categoryProductsStatus;

export default categorySlice.reducer;
