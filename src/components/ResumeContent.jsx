import React from "react";

const ProgressBar = ({ title, percentage, color }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-0.5">{title}</h3>
      <div className="flex items-center gap-4">
        <div className=" h-2.5 bg-gray-200 rounded-3xl w-full dark:border-2 dark:border-black dark:h-3.5">
          <div
            className={`${color} rounded h-full`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="ml-auto">{percentage}%</span>
      </div>
    </div>
  );
};

const KnowLedge = ({ title }) => {
  return (
    <div className="flex">
      <h3 className="bg-gray-200 py-3 px-4 rounded w-fit text-sm dark:border dark:border-black hover:bg-gray-500 hover:text-white transition-all duration-300">
        {title}
      </h3>
    </div>
  );
};

const ResumeContent = () => {
  return (
    <div className="p-10 dark:text-black">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold title-roboto">Resume</h2>
        <div className="w-60 h-1 rounded-3xl bg-blue-600"></div>
      </div>

      <div className="flex gap-8 my-8 max-lg:flex-col">
        {/* Edu */}
        <div className="w-1/2 max-lg:w-full">
          <div className="flex items-center font-semibold text-2xl gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>

            <h2>Education</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="bg-rose-50 p-6 rounded-lg border-2 border-white dark:border-black">
              <h4 className="text-gray-500 font-medium text-sm">
                2018 - Present
              </h4>
              <h2 className="text-lg font-medium">
                Universitas Bani Saleh Bekasi
              </h2>
              <p className="text-sm">
                College Majoring In Information Technology
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-2 border-white dark:border-black">
              <h4 className="text-gray-500 font-medium text-sm">2015 - 2018</h4>
              <h2 className="text-lg font-medium">SMK Mandalahayu 2 Bekasi</h2>
              <p className="text-sm">
                High School Major Computer and Network Engineering
              </p>
            </div>
          </div>
        </div>
        {/* Experience */}

        <div className="w-1/2 max-lg:w-full">
          <div className="flex items-center font-semibold text-2xl gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
              className="size-8 text-blue-500"
            >
              <path
                fill="currentColor"
                d="M2048 384v1280H0V384h640V256q0-27 10-50t27-40t41-28t50-10h512q27 0 50 10t40 27t28 41t10 50v128h640zm-1280 0h512V256H768v128zM128 512v185l640 319V896h512v120l640-319V512H128zm768 512v128h256v-128H896zm1024 512V839l-640 321v120H768v-120L128 839v697h1792z"
              />
            </svg>
            <h2>Work Experience</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="bg-indigo-50 p-6 rounded-lg border-2 border-white dark:border-black">
              <h4 className="text-gray-500 font-medium text-sm">
                November 2023 - Present
              </h4>
              <h2 className="text-lg font-medium">Freelance Front End Web</h2>
              <p className="text-sm">
                freelance workers on the Fiverr and Facebook platforms
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg border-2 border-white dark:border-black">
              <h4 className="text-gray-500 font-medium text-sm">
                July 2022 - Present
              </h4>
              <h2 className="text-lg font-medium">
                SMKI Rabbaanii Islamic School
              </h2>
              <p className="text-sm">Productive RPL Teacher</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-2 border-white dark:border-black">
              <h4 className="text-gray-500 font-medium text-sm">
                July 2021 - October 2021
              </h4>
              <h2 className="text-lg font-medium">PT. Astra Honda Motor</h2>
              <p className="text-sm">Web Development (Internship)</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Edu and Exp */}

      <div className="flex gap-8 max-md:flex-col">
        {/* ---------------------------Working Skill-------------------------- */}

        <div className="w-1/2 max-md:w-full">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              className="text-blue-500"
            >
              <path
                fill="currentColor"
                d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z"
              />
            </svg>
            <h2 className="font-semibold text-2xl">Working Skill</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className="work">
              {/* <h2>HTML, CSS, Javascript, & PHP</h2> */}
              <ProgressBar
                title={"HTML, CSS, Javascript, & PHP"}
                percentage={95}
                color={"bg-orange-400"}
              />

              <ProgressBar
                title={"ReactJs & NextJs"}
                percentage={90}
                color={"bg-blue-400"}
              />
              <ProgressBar
                title={"TailwindCSS & Bootstrap"}
                percentage={97}
                color={"bg-green-400"}
              />
              <ProgressBar
                title={"React Native"}
                percentage={85}
                color={"bg-purple-400"}
              />
            </div>
          </div>
        </div>

        {/* ---------------------------Knowledge-------------------------- */}
        <div className="w-1/2 max-md:w-full">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              className="text-blue-500"
            >
              <path
                fill="currentColor"
                d="M20 25h7v2h-7zm2 4h3v2h-3zm5-6h-2c0-1.1.4-2 1.2-2.8l.5-.5c.8-.8 1.3-2 1.3-3.2c0-2.5-2-4.5-4.5-4.5S19 14 19 16.5c0 1.2.5 2.3 1.3 3.2l.5.5c.8.8 1.2 1.7 1.2 2.8h-2c0-.5-.2-1-.6-1.4l-.5-.5c-1.2-1.2-1.9-2.9-1.9-4.6c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5c0 1.7-.7 3.4-1.9 4.6l-.5.5c-.4.4-.6.9-.6 1.4zM6 22h8v2H6z"
              />
              <circle cx="12" cy="19" r="1" fill="currentColor" />
              <path
                fill="currentColor"
                d="M6 18h3v2H6zm0-4h7v2H6zm4-4h7v2h-7z"
              />
              <circle cx="7" cy="11" r="1" fill="currentColor" />
              <path fill="currentColor" d="M16 6h4v2h-4z" />
              <circle cx="13" cy="7" r="1" fill="currentColor" />
              <path fill="currentColor" d="M6 6h4v2H6z" />
              <path
                fill="currentColor"
                d="M18 28H4V4h18v4h2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h14v-2z"
              />
            </svg>
            <h2 className="font-semibold text-2xl">Knowledges</h2>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <KnowLedge title={"Front End Developer"} />
            <KnowLedge title={"Web Developer"} />
            <KnowLedge title={"ReactJs"} />
            <KnowLedge title={"NextJs"} />
            <KnowLedge title={"React Native"} />
            <KnowLedge title={"TailwindCSS"} />
            <KnowLedge title={"HTML, CSS, Javascript & PHP"} />
            <KnowLedge title={"Bootstrap"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
