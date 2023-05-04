import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Product1 from "./../../assets/images/products/colombia2.png";
import { getServerURL } from "../api/api";
import ReactHtmlParser from "react-html-parser";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  componentDidMount() {}

  renderName(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return productDetails[0].name;
    }
  }

  renderName(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return productDetails[0].name;
    }
  }

  renderIMG1(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return getServerURL() + productDetails[0].image_1;
    }
  }

  rendersku(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return productDetails[0].sku;
    }
  }

  renderBrand(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return productDetails[0].brand;
    }
  }

  renderDescription(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return productDetails[0].description;
    }
  }

  renderOptions(productDetails) {
    // if category is coffee then show grind options
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      if (productDetails[0].category == "Coffee") {
        return (
          <Fragment>
            <h6 className="mt-2">Choose blend</h6>
            <div className="input-group">
              <div className="form-check mx-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Beans
                </label>
              </div>
              <div className="form-check mx-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Grounded (£2 extra)
                </label>
              </div>
            </div>
          </Fragment>
        );
      }
    }
  }

  renderPrice(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      if (productDetails[0].offer_price == "") {
        return <p className=" h3">£{productDetails[0].price}</p>;
      } else {
        return (
          <Fragment>
            <strike>{productDetails[0].price}</strike>
            <p className="text-success h2">£{productDetails[0].offer_price}</p>
          </Fragment>
        );
      }
    }
  }

  htmlParser(html) {
    let parseHTML = ReactHtmlParser(html);

    return parseHTML;
  }

  render() {
    const productDetails = this.props.productDetails;

    return (
      <Fragment>
        <Container className="">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col md={6} lg={6} sm={12} xs={12}>
                  <img
                    className="w-100"
                    src={this.renderIMG1(productDetails)}
                  />
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">
                    {this.renderName(productDetails)}
                  </h5>
                  <p className="h7 text-secondary">
                    SKU: {this.rendersku(productDetails)} | Brand:{" "}
                    {this.renderBrand(productDetails)}
                  </p>{" "}
                  {this.renderPrice(productDetails)}
                  {this.renderOptions(productDetails)}
                  <h6 className="mt-2">Quantity</h6>
                  <div className="input-group mt-3">
                    <input className="form-control-sm  " type="number" />
                    <button className="btn btn-primary m-1 ">
                      {" "}
                      <i className="fa fa-shopping-cart "></i> Add To Cart
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={12} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  {this.htmlParser(this.renderDescription(productDetails))}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Product;
