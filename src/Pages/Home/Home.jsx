import React from "react";
import Banner from "../../Components/Banner/Banner";
import Breakfast from "../../Components/Breakfast/Breakfast";
import CTA from "../../Components/CTA/CTA";
import Dinner from "../../Components/Dinner/Dinner";
import Foods from "../../Components/Foods/Foods";
import Lunch from "../../Components/Lunch/Lunch";

const Home = () => {
  return (
    <section className="home" data-aos="fade-in">
      <Banner></Banner>
      <Foods></Foods>
      <CTA></CTA>
    </section>
  );
};

export default Home;
