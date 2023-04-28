import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import p1 from "../../assets/images/products/noBackground/colombia.png";
import p2 from "../../assets/images/products/noBackground/Brazil.png";
import p3 from "../../assets/images/products/noBackground/Guatemala.png";
import p4 from "../../assets/images/products/noBackground/Honduras.png";
import p5 from "../../assets/images/products/noBackground/India.png";
import p6 from "../../assets/images/products/noBackground/Indonesia.png";
import p7 from "../../assets/images/products/noBackground/Peru.png";
import p8 from "../../assets/images/products/noBackground/Vietnam.png";

export class ItemsList extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Items list</h2>
            <p>Products list section</p>
          </div>
          <Row>
            <Col className="p-2" key={1} xl={3} lg={4} sm={4} xs={6} md={4}>
              <Card>
                <Link
                  to="/ProductPage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="image-box card w-100">
                    <img className="center " src={p1} />
                    <Card.Body>
                      <p className="product-price-on-card">Price: £2</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Card>
            </Col>
            <Col className="p-2" key={2} xl={3} lg={4} sm={4} xs={6} md={4}>
              <Card>
                <Link
                  to="/ProductPage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="image-box card w-100">
                    <img className="center" src={p2} />
                    <Card.Body>
                      <p className="product-price-on-card">Price: £2</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Card>
            </Col>
            <Col className="p-2" key={3} xl={3} lg={4} sm={4} xs={6} md={4}>
              <Card>
                <Link
                  to="/ProductPage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="image-box card w-100">
                    <img className="center" src={p3} />
                    <Card.Body>
                      <p className="product-price-on-card">Price: £2</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Card>
            </Col>
            <Col className="p-2" key={4} xl={3} lg={4} sm={4} xs={6} md={4}>
              <Card>
                <Link
                  to="/ProductPage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="image-box card w-100">
                    <img className="center " src={p4} />
                    <Card.Body>
                      <p className="product-price-on-card">Price: £2</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Card>
            </Col>
            <Col className="p-2" key={5} xl={3} lg={4} sm={4} xs={6} md={4}>
              <Card>
                <Link
                  to="/ProductPage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="image-box card w-100">
                    <img className="center" src={p5} />
                    <Card.Body>
                      <p className="product-price-on-card">Price: £2</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Card>
            </Col>
            <Col className="p-2" key={6} xl={3} lg={4} sm={4} xs={6} md={4}>
              <Card>
                <Link
                  to="/ProductPage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="image-box card w-100">
                    <img className="center " src={p6} />
                    <Card.Body>
                      <p className="product-price-on-card">Price: £2</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ItemsList;
