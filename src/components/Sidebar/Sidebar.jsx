import React, { useEffect } from "react";
import "./Sidebar.scss";
import { setSidebarOff } from "../../store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus } from "../../store/sidebarSlice";
import { Link } from "react-router-dom";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";
export default function Sidebar() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  console.log(categories);
  const isSidebarOn = useSelector(getSidebarStatus);
  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);
  return (
    <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
      <button
        className="sidebar-hide-btn"
        type="button"
        onClick={() => dispatch(setSidebarOff())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="cat-list">
          {categories.map((category, id) => (
            <li key={id} onClick={() => dispatch(setSidebarOff())}>
              <Link
                to={`category/${category}`}
                className="cat-list-link text-uppercase"
              >
                {category.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
