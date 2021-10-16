import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import img1 from "../../Images/Image/adult-blur-blurred-background-687824.png";
import img2 from "../../Images/Image/chef-cook-food-33614.png";
import img3 from "../../Images/Image/architecture-building-city-2047397.png";

const CTA = () => {
  return (
    <section className="section-cta" data-aos="fade-right">
      <h2>Why you choose us</h2>
      <p className="w-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam
        minus alias necessitatibus, inventore recusandae ipsum vel illo sint ea.
      </p>
      <>
        <Row xs={1} md={2} lg={3} className="g-4 my-3">
          <Col className="cta-item">
            <Card className="cta-item__card">
              <Card.Img variant="top" src={img1} />
              <Card.Body className="cta-item__body">
                <Card.Title className="cta-item__title">
                  <span className="icon-box">
                    <i class="bi bi-truck"></i>
                  </span>{" "}
                  Fast Delivery
                </Card.Title>
                <Card.Text className="cta-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                  magnam magni quasi molestias sint maxime!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cta-item">
            <Card className="cta-item__card">
              <Card.Img variant="top" src={img2} />
              <Card.Body className="cta-item__body">
                <Card.Title className="cta-item__title">
                  <span className="icon-box">
                    <i class="bi bi-broadcast-pin"></i>
                  </span>{" "}
                  A good auto responder
                </Card.Title>
                <Card.Text className="cta-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                  magnam magni quasi molestias sint maxime!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cta-item">
            <Card className="cta-item__card">
              <Card.Img variant="top" src={img3} />
              <Card.Body className="cta-item__body">
                <Card.Title className="cta-item__title">
                  <span className="icon-box">
                    <i class="bi bi-house"></i>
                  </span>{" "}
                  Home Delivery
                </Card.Title>
                <Card.Text className="cta-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                  magnam magni quasi molestias sint maxime!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    </section>
  );
};

export default CTA;
