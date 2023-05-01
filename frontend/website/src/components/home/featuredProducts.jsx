import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./../../assets/css/card.css";
import { getProductsByFeatureTopSellers, getServerURL } from "../api/api";
import { Link } from "react-router-dom";

class FeaturedProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topsellingProducts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await getProductsByFeatureTopSellers()
      .then((response) => {
        this.setState({ topsellingProducts: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const featuredProducts = this.state.topsellingProducts;

    const renderBestSellers = featuredProducts.map((featuredProduct, index) => {
      if (featuredProduct.offer_price !== "") {
        return (
          <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
            <Link
              to="/Product"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card ">
                <img
                  className="center"
                  src={getServerURL() + featuredProduct.image_nobackground}
                />
                <Card.Body>
                  <p>{featuredProduct.name} </p>
                  <p>
                    <strike>£{featuredProduct.price} </strike> £
                    {featuredProduct.offer_price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
            <Link
              to="/Product"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card ">
                <img
                  className="center"
                  src={getServerURL() + featuredProduct.image_nobackground}
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    {featuredProduct.name}{" "}
                  </p>
                  <p className="product-price-on-card">
                    £{featuredProduct.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="text-center center p-2" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Best sellers</h2>
            <div>You have to try these!</div>
          </div>
          <Row>{renderBestSellers}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
