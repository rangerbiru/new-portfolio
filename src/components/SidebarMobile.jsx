import React from "react";

const SidebarMobile = ({ showSidebar, checkHandler, sidebarRef }) => {
  return (
    <div
      ref={sidebarRef}
      className={`top-0 right-0  bg-blue-500 dark:bg-gray-600 py-10 px-5 text-white w-full fixed h-full z-40 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0 tess" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="title-roboto text-2xl font-bold">Rangerbiru.dev</h2>
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={showSidebar}
            onChange={checkHandler}
          />

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <h3 className="mt-20 text-4xl font-semibold text-white">
        I am a sidebar
      </h3>
    </div>
  );
};

export default SidebarMobile;
