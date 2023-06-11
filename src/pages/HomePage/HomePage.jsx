import React, { useEffect } from "react";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import "./HomePage.scss";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProductsStatus,
  fetchAsyncProducts,
  getAllProducts,
} from "../../store/productSlice";
import ProductList from "../../components/ProductList/ProductList";
import { getAllCategories } from "../../store/categorySlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);
  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getAllProductsStatus);

  console.log(products);

  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  let catProductsOne = products.filter(
    (product) => product.category === categories[0]
  );

  let catProductsTwo = products.filter(
    (product) => product.category === categories[1]
  );

  let catProductsThree = products.filter(
    (product) => product.category === categories[2]
  );

  let catProductsFour = products.filter(
    (product) => product.category === categories[3]
  );
  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py5">
            <div className="categories-item">
              <div className="title-md">
                <h3 className="">See Our Products</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsOne} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsTwo} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[2]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsThree} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[3]}</h3>
              </div>
              {productsStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFour} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
