import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const items = ["All", "HTML & CSS", "ReactJs", "NextJs", "React Native"];

function FilterButtons({ handleClick, active }) {
  return (
    <div className="flex flex-wrap gap-4 my-5">
      {items.map((item, i) => (
        <button
          className={`${
            active === item.toLowerCase() && "bg-blue-600 text-white "
          } cursor-pointer py-2 px-4 hover:bg-blue-600  hover:text-white transition-all duration-300 rounded-2xl border border-black`}
          onClick={() => handleClick(item.toLowerCase())}
          key={i}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

const PortfolioContent = () => {
  const data = {
    items: [
      {
        title: "Jasa Pembuatan Website",
        img: "https://i.imgur.com/ENTAg13.png",
        category: "html & css",
        link: "https://rangerbiru.github.io/toko-web/",
      },
      {
        title: "Form BalaBila Bike",
        img: "https://i.imgur.com/Ss4Nc7z.png",
        category: "reactjs",
        link: "https://rangerbiru.github.io/form-balabila/",
      },
      {
        title: "Web Image Generate (Unsplash API)",
        img: "https://i.imgur.com/pcNzbYt.png",
        category: "html & css",
        link: "https://rangerbiru.github.io/image-generation/",
      },
      {
        title: "Web Culiner",
        img: "https://i.imgur.com/bU5T4l7.png",
        category: "html & css",
        link: "https://rangerbiru.github.io/web-culiner/",
      },
      {
        title: "Web Resto (API MealDb)",
        img: "https://i.imgur.com/4SLGeZa.png",
        category: "reactjs",
        link: "https://tes-resto-page.vercel.app/",
      },
      {
        title: "Slicing Ngulie",
        img: "https://i.imgur.com/s4bJecm.png",
        category: "html & css",
        link: "https://rangerbiru.github.io/project-web-kelas12/",
      },
      {
        title: "STMIK Bani Saleh ",
        img: "https://i.imgur.com/nItOywF.png",
        category: "html & css",
        link: "https://rangerbiru.github.io/project-banisaleh/",
      },
      {
        title: "Anime Search Web",
        img: "https://i.imgur.com/zTKcMzn.png",
        category: "reactjs",
        link: "https://movies-search-tau.vercel.app/",
      },
    ],
  };

  const [displayData, setDisplayData] = useState(data.items);
  const [active, setActive] = useState("all");

  const handleCategoryClick = (category) => {
    if (category === active) return;
    setActive(category);

    if (category === "all") {
      setDisplayData(data.items);
      return;
    }

    const filteredData = data.items.filter(
      (item) => item.category === category
    );

    // Jika tidak ada item dalam kategori yang dipilih, tampilkan kategori kosong
    if (filteredData.length === 0) {
      setDisplayData([{ category: "" }]);
    } else {
      setDisplayData(filteredData);
    }
  };

  return (
    <div className="p-10 dark:text-black max-lg:py-8 max-lg:px-6">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold title-roboto">Portfolio</h2>
        <div className="w-60 h-1 rounded-3xl bg-blue-600"></div>
      </div>
      <FilterButtons active={active} handleClick={handleCategoryClick} />

      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <AnimatePresence>
          {displayData.map(({ img, link, title, category }, i) => (
            <>
              {category.length === 0 ? (
                <div className="my-12">
                  <h2 className="text-xl font-bold title-roboto bg-gray-200 py-2 px-4 absolute left-1/2 -translate-x-1/2  rounded-lg hover:bg-gray-500 hover:text-white hover:scale-150 transition-all duration-300 dark:border-2 dark:border-black">
                    Coming Soon
                  </h2>
                </div>
              ) : (
                <motion.div
                  key={i}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  exit={{ transform: "scale(0)" }}
                >
                  <a href={link} target="_blank">
                    <div className="shadow-lg rounded-lg bg-gray-50 h-full transition-all duration-300 hover-img hover:bg-gray-200">
                      <img
                        src={img}
                        className="rounded-t-lg w-full object-cover h-72 transition-all duration-300"
                        alt="nothing"
                      />
                      <div className="my-4 px-4 pt-1 text-left">
                        <h2 className="text-xl font-bold mb-1 ">{title}</h2>
                        <span className="text-gray-500 uppercase text-xs tracking-wider">
                          {category}
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              )}
            </>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioContent;
