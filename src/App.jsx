import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
