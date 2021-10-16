import React from "react";
import { Card, Col } from "react-bootstrap";
import useAll from "../../hooks/useAll";

const Breakfast = () => {
  const { carts, breakfast } = useAll();
  const { handleAddToCart } = carts;

  return breakfast.map((food) => (
    <Col className="food-item" data-aos="zoom-in">
      <Card className="p-lg-5 px-4 pt-4 food-item__card">
        <Card.Img className="position-relative" variant="top" src={food.img} />
        <Card.Body className="px-0">
          <Card.Title className="text-center food-item__title">
            {food.name}
          </Card.Title>
          <p className="food-item__price"> {food.price}$</p>
          <Card.Text className="mt-3">
            {food?.description?.slice(0, 80)}..{" "}
          </Card.Text>

          <button className="btn-cart" onClick={() => handleAddToCart(food)}>
            {" "}
            <i class="bi bi-cart-plus"></i>
          </button>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default Breakfast;
