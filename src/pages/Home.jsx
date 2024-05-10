import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section
      id="home"
      className="py-24 px-20 flex gap-6 max-lg:flex-col max-lg:w-full max-lg:px-4 max-lg:gap-4 max-lg:py-12"
    >
      {/* Left */}
      <div
        className="w-3/12 h-fit rounded-2xl shadow-2xl bg-white max-lg:w-full"
        data-aos={window.innerWidth >= 768 ? "fade-right" : "fade-down"}
        data-aos-duration="1000"
      >
        <Profile />
      </div>
      {/* Center */}
      <div
        className="w-full bg-white rounded-2xl shadow-2xl max-lg:w-full"
        data-aos={window.innerWidth >= 768 ? "fade-down" : ""}
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <HomeContent />
        <Footer />
      </div>
      {/* Right */}
      <aside
        className="w-48 h-fit bg-white rounded-2xl shadow-2xl max-lg:h-full max-lg:w-full"
        data-aos={window.innerWidth >= 768 ? "fade-left" : ""}
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <Navbar />
      </aside>
    </section>
  );
};

export default Home;
