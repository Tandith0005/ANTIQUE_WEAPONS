import React from "react";
import Buy from "../../assets/Buy.png";
import Sell from "../../assets/Sell.png";
import Exchange from "../../assets/Exchange.png";
import WantedPoster from "./WantedPoster";
import profile from "../../assets/profile.jpg"
import { useGSAP } from "@gsap/react";
import { heroAnimations } from "../Animations/HeroAnimations";
import { Link } from "react-router-dom";
import handRight from '../../assets/handRight.png';

const Hero = () => {

  useGSAP(() => {
    heroAnimations();
  }, []);

  return (
    <div className="custom-container allPosters">
      {/* left posters */}
      <div className="left-posters">
        <Link to="/jobs">
          <h2 className="jobOffer-wrapper">
          OPEN FOR A JOB?
          <span className="jobSpan">ILLEGAL BUT HIGH-PAYING</span>
          <img src={handRight}  alt="RightHand" className="handIcon absolute top-[100%] left-[40%] md:top-[50%] md:left-[100%] md:rotate-10 rotate-90 w-15" />
        </h2>
        </Link>
        <Link to="/shop">
          <img src={Buy} alt="Buy" className="gun-buttons hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-shadow duration-300" />
        </Link>
        <Link to="/sell">
          <img src={Sell} alt="Sell" className="gun-buttons hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-shadow duration-300" />
        </Link>
        <button>
          <img src={Exchange} alt="Exchange" className="gun-buttons hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-shadow duration-300" />
        </button>
      </div>
      {/* right posters */}
      <div className="right-posters">
        <WantedPoster image={profile} Name="Daniel" age="36" height="5.5'" weight="60kg" crime="Murder" reward="500"></WantedPoster>
      </div>
    </div>
  );
};

export default Hero;
