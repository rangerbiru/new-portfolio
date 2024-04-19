import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <section
      id="home"
      className="py-24 px-20 flex h-screen gap-6 max-lg:flex-col max-lg:w-full max-lg:px-4 max-lg:gap-4 max-lg:py-12"
    >
      {/* Left */}
      <div
        className="w-3/12 rounded-2xl shadow-2xl bg-white max-lg:w-full"
        data-aos={window.innerWidth >= 768 ? "fade-right" : "fade-down"}
        data-aos-duration="1000"
      >
        <Profile />
      </div>
      {/* Center */}
      <div
        className="w-1/2 bg-white rounded-2xl shadow-2xl max-lg:h-full max-lg:w-full"
        data-aos={window.innerWidth >= 768 ? "fade-down" : "fade-right"}
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h2>center</h2>
      </div>
      {/* Right */}
      <aside
        className="w-3/12 bg-white rounded-2xl shadow-2xl max-lg:h-full max-lg:w-full"
        data-aos={window.innerWidth >= 768 ? "fade-left" : "fade-up"}
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <Navbar />
      </aside>
    </section>
  );
};

export default Home;
