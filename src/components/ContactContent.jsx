import React from "react";

const ContactContent = () => {
  return (
    <div className="p-10 dark:text-black">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold title-roboto">Contact</h2>
        <div className="w-60 h-1 rounded-3xl bg-blue-600"></div>
      </div>

      <div className="bg-gray-100 py-14 px-12 rounded-sm mt-10">
        <div className="box">
          <h2 className="text-xl text-gray-600 leading-relaxed font-medium">
            I'm Always Open To Discussing Product <br />
            <span className="text-black font-bold">
              design work or partnerships
            </span>
          </h2>

          <form className="flex flex-col gap-10 my-10">
            <div className="flex flex-col">
              <label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-transparent focus:outline-none focus:border-b-black border-b-2 border-b-gray-300 px-0.5 mt-2 pb-0.5"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="bg-transparent focus:outline-none focus:border-b-black border-b-2 border-b-gray-300 px-0.5 mt-2 pb-0.5"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">
                Message <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-transparent focus:outline-none focus:border-b-black border-b-2 border-b-gray-300 px-0.5 mt-2 pb-0.5"
              />
            </div>

            <div className="mt-2">
              <button className="flex border-2 border-transparent dark:border-black py-3 px-6 text-sm rounded-xl text-white hover:bg-blue-800 hover:tracking-widest bg-blue-600 dark:text-black dark:hover:bg-blue-600 dark:bg-transparent transition-all duration-300 hover:text-white">
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                  className="ml-1"
                >
                  <path
                    fill="currentColor"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
