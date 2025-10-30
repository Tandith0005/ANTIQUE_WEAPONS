import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AxiosInstance from "../Shared/Axiosinstance";
import { useParams } from "react-router";

const WeaponDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  // const { name, image, price, description } = location.state || {};
  const stateData = location.state;
  

  // fetch data from backend if stateData is null
  const { data , isPending, error } = useQuery({
    queryKey: ["weapon", id],
    queryFn: () => AxiosInstance.get(`/shop/${id}`).then((res) => res.data),
    enabled: !stateData,                         // ← Only fetch if no state
    initialData: stateData,                      // ← Use state as initial data
  });

  const weapons = stateData || data;

  // Loading state
  if (isPending && !stateData) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#53310e] border-t-transparent"></div>
      </div>
    );
  }

  //  Handle direct page access (no state)
  if (error || !weapons) {
    return (
      <div className="text-center text-[#5a3a1a] mt-20 font-serif">
        <h2 className="text-3xl font-bold">Weapon Not Found</h2>
        <Link
          to="/shop"
          className="px-6 py-2 bg-transparent border-2 border-[#8B5E3C] text-[#8B5E3C] font-bold rounded-lg hover:bg-[#8B5E3C] hover:text-[#f7e3b4] transition-all duration-300 mt-4 inline-block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }
  const { name, image, price, description } = weapons;
  

  return (
    <section className="custom-container weaponDetails-section h-dvh">
      <div className="weapon-card">
        {/* corner decorations */}
        <span className="corner-top-left"></span>
        <span className="corner-bottom-right"></span>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={image}
            alt={name}
            className="detailed-img"
          />

          <div className="text-left">
            <h2 className="detailed-name">{name}</h2>
            <p className="detailed-sub">{description}</p>
            <p className="detailed-price">${price}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="detailed-buy-btn">Buy Now</button>
              <Link
                to="/shop"
                className="px-6 py-2 bg-transparent border-2 border-[#8B5E3C] text-[#8B5E3C] font-bold rounded-lg hover:bg-[#8B5E3C] hover:text-[#f7e3b4] transition-all duration-300"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponDetails;
