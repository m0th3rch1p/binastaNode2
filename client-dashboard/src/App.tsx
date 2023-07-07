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
import ProtectedRoute from "./helpers/ProtectedRoute";
import Distributors from "./views/Distributors";
import SinlgeDistributor from "./views/SinlgeDistributor";
import Countries from "./views/Countries";

function App() {
  const user = store.getState().user;
  
  return (
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/" element={
            <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Index />
            </ProtectedRoute>  } />
            <Route path="/countries" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Countries />
              </ProtectedRoute>
            } />
            <Route path="/blog_categories" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <BlogCategories />
              </ProtectedRoute>
            } />
            <Route path="/product_categories" element={ 
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <ProductCategories />
              </ProtectedRoute>
            } />
            <Route path="/products" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Products />
              </ProtectedRoute>
              }/>
            <Route path="/blogs" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Blog />
              </ProtectedRoute>
            }/>
            <Route path="/distributors" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Distributors />
              </ProtectedRoute>
            }/>
            <Route path="/distributor/:id" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <SinlgeDistributor />
              </ProtectedRoute>
            }/>
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
