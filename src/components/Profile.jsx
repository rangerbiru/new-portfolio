import React from "react";
import ProfileImage from "../assets/profile.png";

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

      <h2 className="mt-[40px] lg:mt-20 text-center text-2xl font-semibold dark:text-black">
        Muhammad Arrafi Septiawan
      </h2>
    </div>
  );
};

export default Profile;
