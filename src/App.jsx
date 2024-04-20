import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";

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
      className={`bg-[url('./assets/bgHome.svg')] dark:bg-[url('./assets/bgHomeDark.svg')] transition-all duration-300`}
    >
      <Header />
      <main className="mt-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Resume />} />
            <Route path="/contact" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
