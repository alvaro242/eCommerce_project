import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getServerURL } from "../api/api";

export class SubcategoryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const products = this.props.products;

    const renderProducts = products.map((product, index) => {
      if (product.offer_price !== "") {
        return (
          <Col className="p-2" key={index} xl={2} lg={4} sm={4} xs={6} md={4}>
            <Link
              to={"/product/" + product.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card className="card ">
                <img
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
        <Container>
          <Row>{renderProducts}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SubcategoryContent;
