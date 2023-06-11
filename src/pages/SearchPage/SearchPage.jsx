import React, { useEffect } from "react";
import "./SearchPage.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import {
  fetchAsyncSerchProduct,
  getSearchProducts,
  getSearchProductsStatus,
  setSearchTerm,
  clearSearch,
} from "../../store/searchSlice";

export default function SearchPage() {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);
  useEffect(() => {
    dispatch(clearSearch);
    dispatch(fetchAsyncSerchProduct(searchTerm));
  }, [searchTerm]);
  if (searchProducts.length === 0) {
    return (
      <div className="container" style={{ minHeight: "70vh" }}>
        <div className="fw-5 text-danger py-5">
          <h4>No products found.</h4>
        </div>
      </div>
    );
  }
  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search results:</h3>
            </div>
            <br />
            {searchProductsStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={searchProducts} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
