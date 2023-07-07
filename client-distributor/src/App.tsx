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

function App() {
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/shop_products" element={<ShopProducts />} />
            <Route path="/shop_products/:slug" element={<SingleShopProduct />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customer_addresses" element={<CustomerAddresses />}/>
            <Route path="/customer_orders" element={<CustomerOrders />} />
            <Route path="/customer_orders/:ref" element={<SingleCustomerOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
