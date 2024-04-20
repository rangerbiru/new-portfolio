import React from "react";

const HomeProflie = () => {
  return (
    <div className="p-10 dark:text-black">
      {/* Title */}
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold title-roboto">About</h2>
        <div className="w-60 h-1 rounded-3xl bg-blue-600"></div>
      </div>

      {/* Desc */}
      <div className="my-6">
        <p className="text-justify">
          Hello, my name is Muhammad Arrafi Septiawan. I am a Front-End
          Developer. I am 24 years old. I have experience as a Front-End
          Developer for 5 years. My religion is Islam. I live in North Cikarang,
          Kab. Bekasi. Currently I teach at a vocational school in East
          Cikarang, and work as an RPL teacher. I have been teaching for
          approximately 2 years
          <br /> <br />I am proficient in using HTML, CSS, Javascript and PHP. I
          am used to using frameworks for working on websites and webapps such
          as ReactJs, NextJs, and Laravel. As for CSS, I am used to using CSS
          frameworks such as TailwindCSS and Bootstrap. I can also create mobile
          applications using React Native Expo.
        </p>
      </div>

      {/* What I To Do */}
      <div className="mt-4">
        <h2 className="text-2xl font-medium">Apa Yang Dapat Saya Lakukan?</h2>
        <div className="grid grid-cols-2 gap-5 mt-4 max-lg:grid-cols-1">
          {/* Web Development */}
          <div className="flex gap-2 p-5 bg-rose-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>

            <div className="flex flex-col text-justify">
              <h2 className="font-semibold mb-2">Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                ipsa accusamus dolore explicabo dolores error.
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-indigo-50 rounded-lg p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <div className="flex flex-col text-justify">
              <h2 className="font-semibold mb-2">Mobile Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eaque sint magnam aut laboriosam quibusdam, ratione
                aliquid doloribus sed repellendus?
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-indigo-50 rounded-lg p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>

            <div className="flex flex-col text-justify ">
              <h2 className="font-semibold mb-2">Phone Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eaque sint magnam aut laboriosam quibusdam, ratione
                aliquid doloribus sed repellendus?
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-rose-50 rounded-lg p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>

            <div className="flex flex-col text-justify">
              <h2 className="font-semibold mb-2">Laptop/PC Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eaque sint magnam aut laboriosam quibusdam, ratione
                aliquid doloribus sed repellendus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProflie;
