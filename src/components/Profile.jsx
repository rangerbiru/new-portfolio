import React from "react";
import ProfileImage from "../assets/profile.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-10 w-full">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 lg:-top-24">
        <img
          src={ProfileImage}
          alt="profile"
          className="rounded-full w-48 max-lg:w-32"
        />
      </div>

      <div className="mt-[40px] lg:mt-20 flex flex-col items-center">
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

          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="facebook"
              className="w-11 h-11 rounded-md bg-gray-100 p-2 border-white border-2 dark:border-black dark:bg-white hover:border-black transition-all duration-300"
            >
              <path
                fill="#1976D2"
                fill-rule="evenodd"
                d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              fill="none"
              viewBox="0 0 512 512"
              id="twitter"
              className="w-11 h-11 rounded-md bg-gray-100 p-2 border-white border-2 dark:border-black dark:bg-white hover:border-black transition-all duration-300"
            >
              <g clip-path="url(#clip0_84_15698)">
                <rect width="512" height="512" fill="#fff" rx="60"></rect>
                <path
                  fill="#000"
                  d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_84_15698">
                  <rect width="512" height="512" fill="#fff"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="#" target="_blank">
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

      <div className="mt-4 p-6 bg-gray-200 rounded-lg flex flex-col gap-5">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            id="phone"
            className="w-10 h-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
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
            className="w-10 h-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
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
            className="w-10 h-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
          >
            <path
              fill="#d24545"
              d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"
            ></path>
          </svg>
          <div className="text-phone">
            <h2 className="font-normal dark:text-black text-sm">Location</h2>
            <p className="font-semibold dark:text-black text-base">
              Cikarang Utara
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="city"
            className="w-10 h-10 bg-white p-2 rounded-lg border-2 border-white dark:border-black transition-all duration-300"
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

      <div className="flex flex-col items-center mt-10">
        <a
          href="#"
          className="flex items-center gap-1 bg-blue-600 py-2 px-4 rounded-lg text-white"
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
          <h2 className="font-medium">Download CV</h2>
        </a>
      </div>
    </div>
  );
};

export default Profile;
