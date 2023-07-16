import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store"
// import "@/assets/dist/icons/bootstrap-icons-1.4.0/fonts/"
// import "@/assets/dist/icons/bootstrap-icons-1.4.0/bootstrap-icons.min.css";
// import "@/assets/dist/css/bootstrap-docs.css";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import AuthenticatedLayout from "./layout/AuthenticatedLayout";
import BlogCategories from "./views/BlogCategories";
import GuestLayout from "./layout/GuestLayout";
import Login from "./views/Login";
import ProductCategories from "./views/ProductCategories";
import Products from "./views/Products";
import NewBlogPost from "./views/NewBlogPost";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Distributors from "./views/Distributors";
import SinlgeDistributor from "./views/SinlgeDistributor";
import Countries from "./views/Countries";
import CustomerOrders from "./views/CustomerOrders";
import DistributorOrders from "./views/DistributorOrders";
import DistributorOrderDetails from "./views/DistributorOrderDetails";
import Dashboard from "./views/Dashboard";
import Blogs from "./views/Blogs";
import NewProduct from "./views/NewProduct";
import ProductDetails from "./views/ProductDetails";
import Customers from "./views/Customers";
import NotFoundPage from "./views/NotFoundPage";

function App() {
  const user = store.getState().user;
  
  return (
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="/dashboard" element={
            <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Dashboard />
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
              <Route path="/create_product" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <NewProduct />
              </ProtectedRoute>
              }/>
              <Route path="/products" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Products />
              </ProtectedRoute>
              }/>
              <Route path="/products/:id" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <ProductDetails />
              </ProtectedRoute>
              }/>
              <Route path="/customers" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Customers />
              </ProtectedRoute>
              }/>
              <Route path="/customer_orders" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <CustomerOrders />
              </ProtectedRoute>
              }/>
              <Route path="/distributor_orders" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <DistributorOrders />
              </ProtectedRoute>
              }/>
              <Route path="/distributor_orders/:id" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <DistributorOrderDetails />
              </ProtectedRoute>
              }/>
            <Route path="/create_post" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <NewBlogPost />
              </ProtectedRoute>
            }/>
            <Route path="/blogs" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Blogs />
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
            <Route path="*" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <NotFoundPage />
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
