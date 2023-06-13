import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store"

import ShopLayout from "./layout/ShopLayout";
import InvoiceLayout from "./layout/InvoiceLayout";

import Index from "./views/Index";
import Shop from "./views/Shop";
import Invoice from "./views/Invoice";
import Product from "./views/Product";
import Checkout from "./views/Checkout";

function App() {
  return (
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<ShopLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />}/>
              <Route path="/product/:slug" element={<Product />}/>
              <Route path="/checkout"  element={<Checkout />} />
            </Route>
            <Route element={<InvoiceLayout />}>
              <Route path="/invoice" element={<Invoice />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>    
  );
}

export default App;
