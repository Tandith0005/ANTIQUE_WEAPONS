import React from "react";
import horizontalLine from "../assets/horizontalLine.png";
import { useGSAP } from "@gsap/react";
import { aboutAnimations } from "../Components/Animations/aboutAnimations";

const About = () => {

  useGSAP(() => {
    aboutAnimations();
  }, []);

  return (
    <section id="about" className="custom-container my-10 lg:my-20">

        <img src={horizontalLine} alt="Horizontal Line" className="w-[60%] mb-10 md:mb-15 lg:mb-20" />

      <div className="bg-[#f7e1b5]/80 border-4 border-[#53310e] rounded-xl p-6 md:p-12 shadow-lg">
        {/* Title */}
        <h2 className="about-title text-4xl md:text-5xl font-extrabold text-center text-[#694821] mb-6">
          About Our Shop
        </h2>

        {/* Description */}
        <div className="about-description space-y-6 text-[#53310e] text-lg md:text-xl leading-relaxed text-center md:text-left">
          <p>
            Step into a world of history and craftsmanship. Our antique weapons
            collection is carefully curated, offering a blend of authenticity,
            rarity, and unmatched quality. Whether you're buying, selling, or
            exchanging, we ensure every piece tells its own story.
          </p>
          <p>
            Our mission is to connect enthusiasts and collectors while
            preserving the legacy of these historic artifacts. Join us, and
            experience the thrill of the Old West through our timeless
            collection.
          </p>
        </div>

        {/* Features / Highlights */}
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="feature p-4 text-center bg-[#e9c98c]/80 border-2 border-[#53310e] rounded-xl shadow-md">
            <h3 className="font-bold text-2xl text-[#694821]">Authenticity</h3>
            <p className="text-[#53310e] mt-2">Every item is verified for its origin and history.</p>
          </div>
          <div className="feature p-4 text-center bg-[#e9c98c]/80 border-2 border-[#53310e] rounded-xl shadow-md">
            <h3 className="font-bold text-2xl text-[#694821]">Curated Collection</h3>
            <p className="text-[#53310e] mt-2">Handpicked antiques for collectors and enthusiasts.</p>
          </div>
          <div className="feature p-4 text-center bg-[#e9c98c]/80 border-2 border-[#53310e] rounded-xl shadow-md">
            <h3 className="font-bold text-2xl text-[#694821]">Trusted Trade</h3>
            <p className="text-[#53310e] mt-2">Buy, sell, and exchange safely with our experienced team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
