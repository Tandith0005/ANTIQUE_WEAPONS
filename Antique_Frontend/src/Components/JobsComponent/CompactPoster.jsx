import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const CompactPoster = ({ image, Name, age, crime, reward, status, lastSeen }) => {
  return (
    <div className="bg-[#f7e1b5]/80 border-4 border-[#53310e] rounded-xl shadow-lg p-3 flex flex-col items-center relative hover:scale-105 transition-transform duration-300 sm:w-80 sm:mx-auto">
      {/* Corner Decorations */}
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#53310e]"></span>
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#53310e]"></span>

      {/* Image */}
      <img
        src={image}
        alt={Name}
        className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-lg border-2 border-[#8B5E3C] shadow-md my-3"
      />

      {/* Info */}
      <h3 className="text-[#53310e] font-bold text-xl md:text-2xl mb-1 text-center">
        {Name || "Unknown"}
      </h3>
      <p className="text-[#53310e] text-sm md:text-base italic mb-1">
        Age: {age || "Unknown"}
      </p>
      <p className="text-[#53310e] text-sm md:text-base font-semibold mb-1 uppercase text-center">
        {crime || "Unknown"}
      </p>

      {/*  Added Status and Last Seen */}
      <p className="text-[#53310e] text-sm md:text-base mt-5">
        Status: <span className="font-semibold">{status || "Unknown"}</span>
      </p>
      <p className="text-[#53310e] text-sm md:text-base mb-5">
        Last Seen: <span className="font-semibold">{lastSeen || "Unknown"}</span>
      </p>

      {/* Reward */}
      <div className="flex items-center gap-2 mb-3">
        <Icon
          icon="ri:shield-star-fill"
          className="text-[#53310e] w-6 h-6 md:w-8 md:h-8"
        />
        <span className="text-[#b8860b] font-extrabold text-lg md:text-xl">
          ${reward || "00"}
        </span>
        <Icon
          icon="ri:shield-star-fill"
          className="text-[#53310e] w-6 h-6 md:w-8 md:h-8"
        />
      </div>

      {/* View Details Button */}
      {/* <Link
        to={`/jobs/${id}`}
        className="px-4 py-2 bg-[#8B5E3C] text-[#f7e3b4] font-bold rounded-lg hover:bg-[#694821] transition-all duration-300 my-5"
      >
        Accept Offer
      </Link> */}
      <button className="px-4 py-2 bg-[#8B5E3C] text-[#f7e3b4] font-bold rounded-lg hover:bg-[#694821] transition-all duration-300 my-5">Accept Offer</button>
    </div>
  );
};

export default CompactPoster;
