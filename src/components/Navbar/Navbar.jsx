import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
//import { getSidebarStatus } from "../../store/sidebarSlice";
import { setSidebarOn } from "../../store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/categorySlice";
import CartModal from "../CartModal/CartModal";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../store/cartSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  /*   const temp = useSelector(getSidebarStatus);
  console.log(temp);
 */
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  console.log(itemsCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  console.log(carts);
  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            onClick={() => dispatch(setSidebarOn())}
            className="sidebar-show-btn text-white"
            type="button"
          >
            <i className="fa fa-bars"></i>
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-brand-txt mx-2">
              <span className="fw-7">Snap</span>Up.
            </span>
          </Link>
        </div>
        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                onChange={(e) => handleSearchTerm(e)}
                type="text"
                placeholder="Search your preferred item here"
                className="form-control fs-14"
              />
              <Link
                to={`search/${searchTerm}`}
                className="text-white search-btn flex align-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            {categories.slice(0, 8).map((category, id) => (
              <li className="nav-item no-wrap" key={id}>
                <Link
                  to={`category/${category}`}
                  className="nav-link text-capitalize"
                >
                  {category.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">{itemsCount}</div>
            <CartModal carts={carts} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
