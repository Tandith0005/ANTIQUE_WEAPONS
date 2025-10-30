import React from "react";
import Wanted from "../../assets/wanted_poster_template.jpg";
import { Icon } from "@iconify/react";

const WantedPoster = ({ image, Name, age, height, weight, crime, reward }) => {
  return (
    <div className="wanted-poster w-full max-w-5xl mx-auto p-4 bg-[#f7e1b5] border-4 border-[#53310e] rounded-xl shadow-lg">
      {/* Poster title */}
      <img
        src={Wanted}
        alt="Wanted Poster Title"
        className="w-full rounded-lg mb-4"
      />

      {/* Grid for desktop, stacked for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 items-center">
        {/* Profile Info */}
        <div className="profile col-span-1 md:col-span-1 lg:space-y-2 md:space-y-1 order-2 md:order-1">
          <p className="text-[#53310e] text-xl p-1">
            <span className="font-semibold text-lg opacity-80">Name:</span>{" "}
            <span className="font-bold text-2xl">{Name || "Unknown"}</span>
          </p>
          <p className="text-[#53310e] text-xl p-1">
            <span className="font-semibold text-lg opacity-80">Age:</span>{" "}
            <span className="font-bold text-2xl">{age || "Unknown"}</span>
          </p>
          <p className="text-[#53310e] text-xl p-1">
            <span className="font-semibold text-lg opacity-80">Height:</span>{" "}
            <span className="font-bold text-2xl">{height || "Unknown"}</span>
          </p>
          <p className="text-[#53310e] text-xl p-1">
            <span className="font-semibold text-lg opacity-80">Weight:</span>{" "}
            <span className="font-bold text-2xl">{weight || "Unknown"}</span>
          </p>
        </div>

        {/* Photo */}
        <div className="col-span-1 md:col-span-2 flex justify-center order-1 md:order-2">
          <img
            src={image}
            alt="Criminal"
            className="w-[280px] h-[300px] md:w-[280px] md:h-[350px] border-4 border-[#53310e] rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Crime Info */}
        <div className="col-span-1 md:col-span-1 text-[#53310e] text-center font-bold text-2xl p-2 order-3">
          <p>
            Criminal is considered <br />
            <span className="underline decoration-[#53310e] uppercase">
              {crime || "Unknown"}
            </span>
          </p>
        </div>
      </div>

      {/* reward */}
      <div className="flex justify-between pt-5">
        <Icon icon="ri:shield-star-fill"  className="text-[#53310e] w-16 h-16 lg:w-24 lg:h-24" />
        <Icon icon="ri:shield-star-fill" className="text-[#53310e] w-16 h-16 lg:w-24 lg:h-24" />
      </div>
      <hr className="lg:w-[450px] border-2 border-[#53310e] rounded-xl mx-auto my-5" />
      <div>
        <p className="text-[#53310e] text-center font-bold text-5xl lg:text-7xl p-2">
          Reward: <span className="">{reward || `00`} $</span>
        </p>
      </div>
    </div>
  );
};

export default WantedPoster;
