import React from "react";
import { Card, Col } from "react-bootstrap";
import useBreakfast from "../../hooks/useBreakfast";

const Breakfast = () => {
  const breakfast = useBreakfast();
  console.log(breakfast);
  return breakfast.map((food) => (
    <Col className="food-item">
      <Card className="p-5 food-item__card">
        <Card.Img className="position-relative" variant="top" src={food.img} />
        <Card.Body className="px-0">
          <Card.Title className="text-center food-item__title">
            {food.name}
          </Card.Title>
          <p className="food-item__price"> {food.price}$</p>
          <Card.Text className="mt-3">
            {food?.description?.slice(0, 80)}..{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default Breakfast;
