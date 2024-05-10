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
        <h2 className="text-2xl font-medium">What I Do!</h2>
        <div className="grid grid-cols-2 gap-5 mt-4 max-lg:grid-cols-1">
          {/* Web Development */}
          <div className="flex gap-2 p-5 bg-rose-50 rounded-lg border-2 border-white dark:border-black">
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

          <div className="flex gap-2 bg-indigo-50 rounded-lg p-5 border-2 border-white dark:border-black">
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

          <div className="flex gap-2 bg-indigo-50 rounded-lg p-5 border-2 border-white dark:border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-6"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="m17.674 11.408l-1.905 5.716a.6.6 0 0 1-.398.385L3.693 20.981a.6.6 0 0 1-.74-.765L6.745 8.842a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.614ZM3.296 20.602l6.364-6.364" />
                <path
                  fill="currentColor"
                  d="m18.403 3.182l2.364 2.364a1.846 1.846 0 1 1-2.61 2.61l-2.365-2.364a1.846 1.846 0 0 1 2.61-2.61Z"
                />
                <path d="M11.781 12.116a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.121-2.121Z" />
              </g>
            </svg>

            <div className="flex flex-col text-justify ">
              <h2 className="font-semibold mb-2">
                UI/UX Design Slicing To Code
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eaque sint magnam aut laboriosam quibusdam, ratione
                aliquid doloribus sed repellendus?
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-rose-50 rounded-lg p-5 border-2 border-white dark:border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-6"
              viewBox="0 0 2000 2000"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="70"
                d="M1130.71 627.789c-38.976-25.404-82.7-43.13-128.386-52.095l.591-102.517h-142.26h0l.267 103.322c-22.455 4.662-44.772 11.39-66.634 20.506c-21.861 9.145-42.217 20.327-61.158 32.966l-74.256-73.362l-99.45 100.026l74.164 73.264c-25.558 38.817-43.358 82.212-52.35 127.764l-105.291.19V998.58l106.158-.382c4.655 22.218 11.411 44.494 20.585 66.175c9.22 21.82 20.401 42.082 33.18 60.847"
              />
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="62.717"
                transform="translate(91.594 974.827) scale(1.11612)"
              >
                <path
                  stroke-linecap="round"
                  d="M997.93 547.347v-97.233c20.037-4 40.034-10.123 59.58-18.235c19.587-8.209 37.866-18.236 54.959-29.592l67.921 66.967l89.145-89.487l-67.963-66.973a322.22 322.22 0 0 0 46.944-114.535l92.253-.568V71.73l-93.07.568c-4.17-19.95-10.142-39.738-18.402-59.23c-8.26-19.526-18.279-37.705-29.728-54.604l64.323-64.485l-90.044-88.696l-64.242 64.461c-34.921-22.76-74.096-38.642-115.029-46.675l.529-91.85H867.648l.239 92.572c-20.119 4.177-40.115 10.202-59.702 18.37c-19.587 8.194-37.825 18.213-54.796 29.537l-66.53-65.73l-89.104 89.62l66.45 65.642C641.304-3.993 625.356 34.889 617.3 75.7l-94.338.17v126.084l95.115-.34c4.17 19.906 10.223 39.863 18.442 59.288c8.26 19.549 18.279 37.704 29.729 54.517L598.04 383.36l90.085 88.536l68.044-67.73c34.922 22.897 74.097 38.722 115.07 46.723l.043 96.414c42.195.32 126.647.043 126.647.043z"
                />
                <ellipse
                  cx="932.387"
                  cy="134.257"
                  stroke-dashoffset="700"
                  stroke-linecap="square"
                  rx="109.88"
                  ry="109.879"
                />
              </g>
            </svg>

            <div className="flex flex-col text-justify">
              <h2 className="font-semibold mb-2">
                Laptop, PC, And Phone Services
              </h2>
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
