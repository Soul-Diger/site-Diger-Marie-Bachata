import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import Activity4 from "./pages/Activity4";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cours-collectifs" element={<Activity1 />} />
          <Route path="/cours-prives" element={<Activity2 />} />
          <Route path="/show-animation" element={<Activity3 />} />
          <Route path="/ouverture-de-bal" element={<Activity4 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
