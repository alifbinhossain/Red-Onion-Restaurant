import React from "react";
import { Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Foods = ({ children }) => {
  const activeStyle = { color: "#f91944", borderBottom: "2px solid #f91944" };
  return (
    <section className="foods">
      <nav className="foods__nav">
        <NavLink
          activeStyle={activeStyle}
          to="/foods/breakfast"
          className="foods__nav--item"
        >
          Breakfast
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/foods/lunch"
          className="foods__nav--item"
        >
          Lunch
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          to="/foods/dinner"
          className="foods__nav--item"
        >
          Dinner
        </NavLink>
      </nav>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {children}
      </Row>
    </section>
  );
};

export default Foods;
