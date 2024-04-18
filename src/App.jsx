import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./Home";
import BgHome from "./assets/bgHome.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${BgHome})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <main className="mt-10">
        <Home />
      </main>
    </div>
  );
};

export default App;
