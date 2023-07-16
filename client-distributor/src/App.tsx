import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import GuestLayout from './layout/GuestLayout';
import Register from './views/Register';
import { Provider } from 'react-redux';

import store from "@/store";
import AuthenticatedLayout from './layout/AuthenticatedLayout';
import Shop from './views/Shop';
import Product from './views/Product';
import Checkout from './views/Checkout';
import Login from './views/Login';
import Invoice from './views/Invoice';
import Addresses from './views/Addresses';
import ShopProducts from './views/ShopProducts';
import SingleShopProduct from './views/SingleShopProduct';
import Customers from './views/Customers';
import CustomerAddresses from './views/CustomerAddresses';
import CustomerOrders from './views/CustomerOrders';
import SingleCustomerOrder from './views/SingleCustomerOrder';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
  const user = store.getState().user;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="/dashboard" element={
            <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Dashboard />
            </ProtectedRoute>  } />
            <Route path="/addresses" element={
            <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Addresses />
            </ProtectedRoute>  } />
            <Route path="/shop" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
                <Shop />
            </ProtectedRoute>  } />
            <Route path="/shop/:slug" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Product />
            </ProtectedRoute>  } />
            <Route path="/checkout" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Checkout />
            </ProtectedRoute>
            } />
            <Route path="/invoice/:id" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Invoice />
            </ProtectedRoute>
            } />
            <Route path="/shop_products" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <ShopProducts />
            </ProtectedRoute>
            } />
            <Route path="/shop_products/:slug" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <SingleShopProduct />
            </ProtectedRoute>
            } />
            <Route path="/customers" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <Customers />
            </ProtectedRoute>
            } />
            <Route path="/customer_addresses" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <CustomerAddresses />
            </ProtectedRoute>
            }/>
            <Route path="/customer_orders" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <CustomerOrders />
            </ProtectedRoute>
            } />
            <Route path="/customer_orders/:ref" element={
              <ProtectedRoute isLoggedIn={user.authenticated as boolean}>
              <SingleCustomerOrder />
            </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
