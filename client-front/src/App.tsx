import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "@/store";

import FrontLayout from "./layout/FrontLayout";

import Index from "./views/Index";
import HowItWorks from "./views/HowItWorks";
import Contact from "./views/Contact";
import Blog from "./views/Blog"
import Terms from "./views/Terms"

import "@/assets/css/plugins.css";
import "@/assets/css/app.css";
import { Provider } from "react-redux";
import SingleBlog from "./views/SingleBlog";

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
              <Route path="/blog/:slug" element={<SingleBlog />}/>
              <Route path="/terms" element={<Terms />}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>    
  );
}

export default App;
