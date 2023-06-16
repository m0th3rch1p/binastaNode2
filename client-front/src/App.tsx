import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "@/store";

import FrontLayout from "./layout/FrontLayout";

import Index from "./views/Index";
import HowItWorks from "./views/HowItWorks";
import Contact from "./views/Contact";
import Blog from "./views/Blog"

import "@/assets/css/plugins.css";
import "@/assets/css/app.css";
import { Provider } from "react-redux";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
            <Route element={<FrontLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/how-it-works" element={<HowItWorks />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/blog" element={<Blog />}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>    
  );
}

export default App;
