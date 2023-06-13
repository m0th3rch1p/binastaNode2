import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";

import Index from "./views/Index";
import HowItWorks from "./views/HowItWorks";
import Contact from "./views/Contact";
import Blog from "./views/Blog"

import "@/assets/css/plugins.css";
import "@/assets/css/app.css";

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
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
  
    </React.StrictMode>    
  );
}

export default App;
