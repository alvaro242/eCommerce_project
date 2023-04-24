import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./../../assets/css/card.css";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center center p-2" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Featured Products</h2>
            <div>Don´t miss these offers!</div>
          </div>
          <Row>
            <Col className="p-2" key={1} xl={2} lg={4} sm={4} xs={6} md={4}>
              <Card className="image-boxFeaturedFeaturedFeaturedFeatured card ">
                <img
                  className="center"
                  src="https://blog.mozilla.org/opendesign/files/2018/07/firefox-logo-1000x1032.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Firefox </p>
                  <p className="product-price-on-card">Price: 2EUR</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-2" key={2} xl={2} lg={4} sm={4} xs={6} md={4}>
              <Card className="image-boxFeaturedFeaturedFeatured card">
                <img
                  className="center"
                  src="https://www.google.com/images/hpp/Chrome_Owned_96x96.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Chrome </p>
                  <p className="product-price-on-card">Price: 1EUR</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-2" key={3} xl={2} lg={4} sm={4} xs={6} md={4}>
              <Card className="image-boxFeaturedFeaturedFeatured card">
                <img
                  className="center"
                  src="https://blog.mozilla.org/opendesign/files/2018/07/firefox-logo-1000x1032.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Firefox </p>
                  <p className="product-price-on-card">Price: 2EUR</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-2" key={4} xl={2} lg={4} sm={4} xs={6} md={4}>
              <Card className="image-boxFeaturedFeaturedFeatured card">
                <img
                  className="center"
                  src="https://www.google.com/images/hpp/Chrome_Owned_96x96.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Chrome </p>
                  <p className="product-price-on-card">Price: 1EUR</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-2" key={5} xl={2} lg={4} sm={4} xs={6} md={4}>
              <Card className="image-boxFeaturedFeaturedFeatured card">
                <img
                  className="center"
                  src="https://blog.mozilla.org/opendesign/files/2018/07/firefox-logo-1000x1032.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Firefox </p>
                  <p className="product-price-on-card">Price: 2EUR</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-2" key={6} xl={2} lg={4} sm={4} xs={6} md={4}>
              <Card className="image-boxFeaturedFeaturedFeatured card">
                <img
                  className="center"
                  src="https://www.google.com/images/hpp/Chrome_Owned_96x96.png"
                />
                <Card.Body>
                  <p className="product-name-on-card">Chrome </p>
                  <p className="product-price-on-card">Price: 1EUR</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
