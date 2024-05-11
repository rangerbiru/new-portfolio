import React from "react";
import ProfileImage from "../assets/profile1.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="py-8 px-10 w-full max-lg:p-6">
      <div className="absolute max-lg:relative max-lg:-top-28 -top-16 left-1/2 -translate-x-1/2 lg:-top-24 overflow-hidden size-48 rounded-full max-lg:size-36 max-lg:mb-5">
        <img
          src={ProfileImage}
          alt="profile"
          className="rounded-full object-cover max-lg:w-full absolute top-0 left-0 w-full h-[135%]"
        />
      </div>

      <div className="mt-[40px] lg:mt-20 flex flex-col items-center max-lg:-mt-28">
        <h2 className="text-2xl font-semibold dark:text-black text-center">
          Muhammad Arrafi Septiawan
        </h2>

        <p className="mt-3 text-[14px] font-medium bg-gray-200 py-2 px-4 rounded-md dark:text-white dark:bg-black transition-all hover:bg-gray-300 duration-150 dark:hover:bg-black">
          Front End Developer
        </p>

        <div className="mt-6 flex justify-center gap-8">
          {/* <Link to={"/"}>tess</Link> */}
          <a href="https://github.com/rangerbiru" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="github"
              className="w-11 h-11 rounded-md bg-gray-100 p-2 border-white border-2 dark:border-black dark:bg-white hover:border-black transition-all duration-300"
            >
              <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
            </svg>
          </a>

          <a href="https://www.fiverr.com/arrafiseptiawan" target="_blank">
            <svg
              className="w-11 h-11 rounded-md bg-gray-100 p-2 border-white border-2 dark:border-black dark:bg-white hover:border-black transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
            >
              <circle cx="200" cy="200" fill="#00b22d" r="200" />
              <g fill="#fff">
                <path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z" />
                <path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z" />
                <circle cx="104.6" cy="163" r="9" />
                <path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z" />
              </g>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-arrafi-septiawan-2619b3224/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-11 h-11 rounded-md bg-gray-100 p-2 border-white border-2 dark:border-black dark:bg-white hover:border-black transition-all duration-300"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#0A66C2" rx="60" />
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                />
              </g>
            </svg>
          </a>

          <a href="https://www.instagram.com/arrafi_septiawan/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="instagram"
              className="w-11 h-11 rounded-md bg-gray-100 p-2 border-white border-2 dark:border-black dark:bg-white hover:border-black transition-all duration-300"
            >
              <linearGradient
                id="a"
                x1="1.464"
                x2="14.536"
                y1="14.536"
                y2="1.464"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFC107"></stop>
                <stop offset=".507" stop-color="#F44336"></stop>
                <stop offset=".99" stop-color="#9C27B0"></stop>
              </linearGradient>
              <path
                fill="url(#a)"
                d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
              ></path>
              <linearGradient
                id="b"
                x1="5.172"
                x2="10.828"
                y1="10.828"
                y2="5.172"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFC107"></stop>
                <stop offset=".507" stop-color="#F44336"></stop>
                <stop offset=".99" stop-color="#9C27B0"></stop>
              </linearGradient>
              <path
                fill="url(#b)"
                d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
              ></path>
              <linearGradient
                id="c"
                x1="11.923"
                x2="12.677"
                y1="4.077"
                y2="3.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFC107"></stop>
                <stop offset=".507" stop-color="#F44336"></stop>
                <stop offset=".99" stop-color="#9C27B0"></stop>
              </linearGradient>
              <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-4 p-6 bg-gray-200 rounded-lg flex flex-col gap-5 border-2 border-white dark:border-black">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            id="phone"
            className="size-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
          >
            <path
              fill="#C65BCF"
              d="M340.4,0h-170c-30.3,0-55,24.7-55,55V457c0,30.3,24.7,55,55,55h170c30.3,0,55-24.7,55-55V55
	C395.4,24.7,370.8,0,340.4,0z M234.7,22.6h42.2c4.9,0,8.8,4.5,8.8,10s-3.9,10-8.8,10h-42.2c-4.9,0-8.8-4.5-8.8-10
	S229.8,22.6,234.7,22.6z M194.8,21.1c6.3,0,11.5,5.1,11.5,11.5S201.1,44,194.8,44c-6.3,0-11.5-5.1-11.5-11.5S188.4,21.1,194.8,21.1z
	 M255.8,477.1c-10.2,0-18.4-8.2-18.4-18.4c0-10.2,8.2-18.4,18.4-18.4s18.4,8.2,18.4,18.4C274.2,468.9,266,477.1,255.8,477.1z
	 M363.4,429.5H147.5V66.6h215.9V429.5z"
            ></path>
          </svg>
          <div className="text-phone">
            <h2 className="font-normal dark:text-black text-sm">Phone</h2>
            <p className="font-semibold dark:text-black text-base">
              +62895 3212 14903
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="email"
            className="size-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
          >
            <g>
              <path fill="#fff" d="M.5 4.5h22v16H.5z"></path>
              <path fill="#cce7ff" d="M20.3 18.5H2.7l-2.2 2h22z"></path>
              <path
                fill="none"
                stroke="#1078ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="m22.5 4.5-11 11.3L.5 4.5M.5 20.5 8.6 13M14.4 13l8.1 7.5"
              ></path>
              <path
                fill="none"
                stroke="#1078ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M.5 4.5h22v16H.5z"
              ></path>
            </g>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
          <div className="text-phone">
            <h2 className="font-normal dark:text-black text-sm">Email</h2>
            <p className="font-semibold dark:text-black text-base">
              bboyrefiez@gmail.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="location"
            className="size-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
          >
            <path
              fill="#d24545"
              d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"
            ></path>
          </svg>
          <div className="text-phone">
            <h2 className="font-normal dark:text-black text-sm">Location</h2>
            <p className="font-semibold dark:text-black text-base">
              Cikarang, Indonesia
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="city"
            className="size-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
          >
            <path
              fill="none"
              stroke="#4d4d4d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M4 45.5h56M7 49.5c1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1M7 54c1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1 1.7 0 1.7-1 3.3-1 1.7 0 1.7 1 3.3 1"
            ></path>
            <path
              fill="#4d4d4d"
              d="M20 16v29H8V16h12m0-1H8c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V16c0-.6-.4-1-1-1z"
            ></path>
            <path
              fill="none"
              stroke="#4d4d4d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M11.5 45v-7.5h5V45M10.5 15v-2h7v2M14 10v3M10.5 18.5h7M10.5 21.5h7M10.5 24.5h7M10.5 27.5h7M10.5 30.5h7M10.5 33.5h7M25.5 45V8c1 .1 4.2.4 7 3 2 1.9 2.7 4 3 5-.7.9-4 5.3-3 11 .4 2.2 1.3 3.9 2 5v13M28 13.5h4M28 16.5h4M25.9 20.5h7M29.5 21v10.5M26 31.5h8M26 35h8"
            ></path>
            <path
              fill="none"
              stroke="#4d4d4d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M27.5 45v-6h5v6M46.5 45V15l12-4v34M49.5 16.5v3M52.5 16.5v3M55.5 16.5v3M49.5 22.5v3M52.5 22.5v3M55.5 22.5v3"
            ></path>
            <g
              fill="none"
              stroke="#4d4d4d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <path d="M49.5 28.5v3M52.5 28.5v3M55.5 28.5v3"></path>
            </g>
            <g
              fill="none"
              stroke="#4d4d4d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <path d="M49.5 34.5v3M52.5 34.5v3M55.5 34.5v3"></path>
            </g>
            <path
              fill="none"
              stroke="#4d4d4d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M40.5 39v5.9M44 39c0 1.9-1.5 3-3.5 3S37 40.9 37 39s1.5-5.4 3.5-5.4S44 37.1 44 39z"
            ></path>
          </svg>
          <div className="text-phone">
            <h2 className="font-normal dark:text-black text-sm">Birthday</h2>
            <p className="font-semibold dark:text-black text-base">
              September 25, 1999
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 max-lg:mt-6">
        <a
          href="https://rangerbiru.github.io/cvOri2/index.html"
          className="flex items-center gap-1 bg-blue-600 py-2 px-4 rounded-lg text-white max-lg:w-full max-lg:justify-center max-lg:py-2.5"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="download"
            className="w-5 h-5"
          >
            <path
              fill="#fff"
              d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
            ></path>
          </svg>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Profile;
