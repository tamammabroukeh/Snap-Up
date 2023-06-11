import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./store/store";
import { Provider } from "react-redux";
import {
  Home,
  Cart,
  Search,
  ProductSingle,
  CategoryProduct,
} from "./pages/index";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductSingle />} />
            <Route path="/category/:category" element={<CategoryProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
