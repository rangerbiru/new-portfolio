import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className={`bg-[url('./assets/bgHome.svg')] dark:bg-[url('./assets/bgHomeDark.svg')] transition-all duration-300 bg-fixed max-lg:bg-scroll`}
    >
      <BrowserRouter>
        <Header />
        <main className="pt-10">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
