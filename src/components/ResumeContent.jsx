import React from "react";

const ResumeContent = () => {
  return (
    <div className="p-10 dark:text-black">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold title-roboto">Resume</h2>
        <div className="w-60 h-1 rounded-3xl bg-blue-600"></div>
      </div>

      <div className="flex gap-12 my-8">
        {/* Edu */}
        <div className="w-1/2">
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

          <div className="grid grid-cols-1 gap-4 mt-6">
            <div className="bg-rose-50 p-6 rounded-lg">
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

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="text-gray-500 font-medium text-sm">2015 - 2018</h4>
              <h2 className="text-lg font-medium">SMK Mandalahayu 2 Bekasi</h2>
              <p className="text-sm">
                High School Major Computer and Network Engineering
              </p>
            </div>
          </div>
        </div>
        {/* Experience */}

        <div className="w-1/2">
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
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
