import React from "react";
import horizontalLine from "../../assets/horizontalLine.png";
import { useGSAP } from "@gsap/react";
import { headingAnimations } from "../Animations/headingAnimations";

const Heading = ({title, subtitle}) => {

  useGSAP(() => {
    headingAnimations();
  }, []);

  return (
    <>
      <div className="custom-container headings">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={horizontalLine} alt="Horizontal Line" />
      </div>
    </>
  );
};

export default Heading;
