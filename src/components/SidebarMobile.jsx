import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMobile = ({ showSidebar, checkHandler, sidebarRef }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isResumePage = location.pathname === "/resume";
  const isWorkPage = location.pathname === "/portfolio";
  const isContactPage = location.pathname === "/contact";

  return (
    <div
      ref={sidebarRef}
      className={`top-0 right-0  bg-blue-500 dark:bg-gray-600 py-10 px-5 text-white w-full fixed h-full z-40 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0 tess" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="title-roboto text-2xl font-bold">Rangerbiru.dev</h2>
        <label className="bg-white text-black btn-circle size-11 swap swap-rotate">
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

      <div className="p-5 flex flex-col items-center gap-5 mt-10">
        {/* Profile Page */}
        <Link
          to={"/"}
          onClick={checkHandler}
          className={`${
            isHomePage ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }  w-full py-4 rounded-lg flex flex-col items-center gap-2 border-2 border-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <h2 className="text-sm font-medium">Profile</h2>
        </Link>

        {/* Profile Page */}
        <Link
          to={"/resume"}
          onClick={checkHandler}
          className={`${
            isResumePage ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }  w-full py-4 rounded-lg flex flex-col items-center gap-2 border-2 border-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>

          <h2 className="text-sm font-medium">Resume</h2>
        </Link>

        {/* Profile Page */}
        <Link
          to={"/portfolio"}
          onClick={checkHandler}
          className={`${
            isWorkPage ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }  w-full py-4 rounded-lg flex flex-col items-center gap-2 border-2 border-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>

          <h2 className="text-sm font-medium">Portfolio</h2>
        </Link>

        {/* Profile Page */}
        <Link
          to={"/contact"}
          onClick={checkHandler}
          className={`${
            isContactPage ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }  w-full py-4 rounded-lg flex flex-col items-center gap-2 border-2 border-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>

          <h2 className="text-sm font-medium">Contact</h2>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMobile;
