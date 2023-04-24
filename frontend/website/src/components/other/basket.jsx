import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Product1 from "./../../assets/images/products/colombia2.png";

class Basket extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className=" text-center mb-55">
            <h2>Basket</h2>
          </div>

          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img className="w-100 h-100" src={Product1} />
                    </Col>

                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5>COLOMBIAN DOUBLE ROASTED MAGIC FLAVOUR</h5>
                      <h6> Quantity = 02 </h6>
                      <h6> 5 x 11 = £60</h6>
                    </Col>

                    <Col md={2} lg={2} sm={2} xs={2}>
                      <input
                        placeholder="1"
                        className="form-control"
                        type="number"
                      />
                      hola hola
                      <Button className="btn btn-block  mt-3  site-btn">
                        <i className="fa fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Basket;
