import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store"
// import "@/assets/dist/icons/bootstrap-icons-1.4.0/fonts/"
// import "@/assets/dist/icons/bootstrap-icons-1.4.0/bootstrap-icons.min.css";
// import "@/assets/dist/css/bootstrap-docs.css";
import "./App.css";

import AuthenticatedLayout from "./layout/AuthenticatedLayout";
import Index from "./views/Index";
import BlogCategories from "./views/BlogCategories";
import GuestLayout from "./layout/GuestLayout";
import Login from "./views/Login";
import ProductCategories from "./views/ProductCategories";
import Products from "./views/Products";
import Blog from "./views/Blog";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/" element={ <Index /> } />
            <Route path="/blog_categories" element={<BlogCategories />} />
            <Route path="/product_categories" element={ <ProductCategories /> } />
            <Route path="/products" element={ <Products /> }/>
            <Route path="/blogs" element={ <Blog />}/>
          </Route>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
