import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./../../assets/css/card.css";
import { getProductsByFeatureTopSellers, getServerURL } from "../api/api";
import { Link } from "react-router-dom";

class TopSellerProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topsellerProducts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await getProductsByFeatureTopSellers()
      .then((response) => {
        this.setState({ topsellerProducts: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const topsellers = this.state.topsellerProducts;

    const renderBestSellers = topsellers.map((product, index) => {
      if (product.offer_price !== "") {
        return (
          <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
            <Link
              to={"/product/" + product.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card ">
                <img
                  alt="product"
                  className="center"
                  src={getServerURL() + product.image_nobackground}
                />
                <Card.Body>
                  <p>{product.name} </p>
                  <p>
                    <strike>£{product.price} </strike> £{product.offer_price}
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
              to={"/product/" + product.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card ">
                <img
                  alt="product"
                  className="center"
                  src={getServerURL() + product.image_nobackground}
                />
                <Card.Body>
                  <p className="product-name-on-card">{product.name} </p>
                  <p className="product-price-on-card">£{product.price}</p>
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
            <h2>Most Popular </h2>
            <div>Top rated coffee</div>
          </div>
          <Row>{renderBestSellers}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default TopSellerProducts;
