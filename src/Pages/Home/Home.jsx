import React from "react";
import { Route } from "react-router";
import Banner from "../../Components/Banner/Banner";
import Breakfast from "../../Components/Breakfast/Breakfast";
import Dinner from "../../Components/Dinner/Dinner";
import Foods from "../../Components/Foods/Foods";
import Lunch from "../../Components/Lunch/Lunch";

const Home = () => {
  return (
    <section className="home">
      <Banner></Banner>
      <Route exact path="/foods/breakfast">
        <Foods>
          <Breakfast></Breakfast>
        </Foods>
      </Route>
      <Route exact path="/foods/lunch">
        <Foods>
          <Lunch></Lunch>
        </Foods>
      </Route>
      <Route exact path="/foods/dinner">
        <Foods>
          <Dinner></Dinner>
        </Foods>
      </Route>
    </section>
  );
};

export default Home;
