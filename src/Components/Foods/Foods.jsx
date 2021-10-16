import React from "react";
import { Row } from "react-bootstrap";
import useAll from "../../hooks/useAll";
import Breakfast from "../Breakfast/Breakfast";
import { Route, useHistory } from "react-router";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";
import { NavLink } from "react-router-dom";

const Foods = ({ children }) => {
  const activeStyle = { color: "#f91944", borderBottom: "2px solid #f91944" };

  const { carts } = useAll();
  const { totalItems } = carts;

  const history = useHistory();

  const handleGoToCheckout = () => {
    history.push("/checkout");
  };

  return (
    <section className="foods">
      <nav className="foods__nav">
        <NavLink
          activeStyle={activeStyle}
          to="/home/foods/breakfast"
          className="foods__nav--item"
        >
          Breakfast
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/home/foods/lunch"
          className="foods__nav--item"
        >
          Lunch
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/home/foods/dinner"
          className="foods__nav--item"
        >
          Dinner
        </NavLink>
      </nav>
      <Row xs={1} md={2} lg={3} className="g-4 my-3">
        <Route exact path="/">
          <Breakfast></Breakfast>
        </Route>
        <Route exact path="/home">
          <Breakfast></Breakfast>
        </Route>
        <Route exact path="/home/foods/breakfast">
          <Breakfast></Breakfast>
        </Route>
        <Route exact path="/home/foods/lunch">
          <Lunch></Lunch>
        </Route>
        <Route exact path="/home/foods/dinner">
          <Dinner></Dinner>
        </Route>
      </Row>

      {totalItems ? (
        <button
          type="button"
          class="btn btn-success d-block mx-auto my-5 position-relative"
          onClick={handleGoToCheckout}
        >
          Checkout Your Food
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      ) : (
        <button disabled className="btn btn-success d-block mx-auto my-5">
          {" "}
          Checkout Your Food
        </button>
      )}
    </section>
  );
};

export default Foods;
