import React from "react";

import Heading from "../Components/Shared/Heading";
import Hero from "../Components/HomeComponents/Hero";
import About from "./About";
import Contact from "./Contact";
import UserMenu from "../Components/Shared/UserMenu";

const Home = () => {
  return (
    <>
      <UserMenu></UserMenu>
      <Heading title="ANTIQUE WEAPONS" subtitle="BUY / SELL / EXCHANGE"></Heading>
      <Hero></Hero>
      <About></About>
      <Contact></Contact>
    </>
  );
};

export default Home;
