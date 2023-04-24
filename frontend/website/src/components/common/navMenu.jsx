import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <Navbar expand="lg" fixed="top">
          <Container fluid={"true"} className="fixed-top p-1 mb-2 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/" className="px-5">
                  <img src="https://www.iconexperience.com/_img/o_collection_png/office/64x64/plain/coffee_bean.png" />
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn search-btn">
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>
              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/login" className="h4 btn">
                  LOGIN
                </Link>
                <Link to="/basketPage">
                  <Button className="cart" variant="light">
                    {" "}
                    <i className="fa fa-shopping-cart"></i>
                  </Button>
                </Link>
                <Link to="/basketPage">
                  <Button className="cart-btn">
                    {" "}
                    <i className="fa fa-shopping-cart"> 3 items</i>
                  </Button>{" "}
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <p className="p-4"></p>
      </Fragment>
    );
  }
}

export default NavMenu;
