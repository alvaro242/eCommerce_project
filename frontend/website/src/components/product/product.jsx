import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Product1 from "./../../assets/images/products/colombia2.png";
import { getServerURL, addToBasket } from "../api/api";
import ReactHtmlParser from "react-html-parser";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      grounded: 0, //bolean
      qty: 1,
      loggedIn: false,
      user: "guest",
      feedbackAddToBasket: <div></div>,
    };
  }

  componentDidMount() {
    const user = this.props.user;
    console.log(user);

    if (typeof user == "undefined") {
      console.log("not logged in");
    } else this.setState({ loggedIn: true, user: user });
  }

  renderName(productDetails) {
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      return productDetails[0].name;
    }
  }

  renderPic(productDetails) {
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

  handleGrind = (e) => {
    let groundValue = e.target.value;

    this.setState({ grounded: groundValue });
  };

  handleqty = (e) => {
    let qty = e.target.value;
    this.setState({ qty: qty });
  };

  handleAddToBasket = () => {
    // if user logged in, items sent to database, else to local storage
    //let objectToApi = new Object();

    let objectToServer = {};
    console.log(this.props.user);

    let normalPrice = this.props.productDetails[0].price;
    let discountedPrice = this.props.productDetails[0].offer_price;
    let priceAfterDiscount = "0";

    if (discountedPrice) {
      priceAfterDiscount = discountedPrice;
    } else {
      priceAfterDiscount = normalPrice;
    }

    let totalPrice =
      priceAfterDiscount * this.state.qty +
      this.state.grounded * this.state.qty;

    console.log("total price is " + totalPrice);

    if (this.state.loggedIn === true) {
      console.log("this works, the email address is" + this.state.user.email);
      objectToServer = {
        user: this.state.user.email,
        product_name: this.props.productDetails[0].name,
        sku: this.props.productDetails[0].sku,
        ground: this.state.grounded,
        qty: this.state.qty,
        unit_price: priceAfterDiscount,
        total_price: totalPrice,
        image_nobackground: this.props.productDetails[0].image_nobackground,
      };

      console.log(
        priceAfterDiscount,
        this.state.qty,
        this.state.grounded,
        this.state.qty
      );
      console.log(
        priceAfterDiscount * this.state.qty +
          this.state.grounded * this.state.qty
      );

      addToBasket(objectToServer).then((response) =>
        this.setState({
          feedbackAddToBasket: (
            <div className="alert alert-success">Added to the basket</div>
          ),
        })
      );
    } else {
      //calculate discounted price if exist
      //calculate total price

      let objectToLocalStorage = {};

      objectToLocalStorage = {
        user: "guest",
        product_name: this.props.productDetails[0].name,
        sku: this.props.productDetails[0].sku,
        ground: this.state.grounded,
        qty: this.state.qty,
        unit_price: priceAfterDiscount,
        total_price: totalPrice,
        image_nobackground: this.props.productDetails[0].image_nobackground,
      };

      var basketString = localStorage.getItem("basket");

      if (basketString === null) {
        const stringedObject = JSON.stringify(objectToLocalStorage);

        localStorage.setItem("basket", "[" + stringedObject + "]");

        this.setState({
          feedbackAddToBasket: (
            <div className="alert alert-success">Added to the basket</div>
          ),
        });

        console.log("stringedObject is " + stringedObject);
      } else {
        console.log("an item on it");
        console.log(basketString);

        const localbasket = JSON.parse(basketString);

        localbasket.push(objectToLocalStorage);

        const stringifiedLocalBasket = JSON.stringify(localbasket);

        localStorage.setItem("basket", stringifiedLocalBasket);

        this.setState({
          feedbackAddToBasket: (
            <div className="alert alert-success">Added to the basket</div>
          ),
        });
      }
    }
  };

  renderOptions(productDetails) {
    // if category is coffee then show grind options
    if (typeof productDetails != undefined && productDetails.length !== 0) {
      if (productDetails[0].category == "Coffee") {
        return (
          <Fragment>
            <Form>
              <h6 className="mt-2">Choose blend</h6>
              <div
                className="input-group"
                onChange={this.handleGrind.bind(this)}
              >
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ground"
                    id="groundno"
                    value="0"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Beans
                  </label>
                </div>
                <div className="form-check mx-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ground"
                    id="groundyes"
                    value="2"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Grounded (+£2.00)
                  </label>
                </div>
              </div>
            </Form>
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

  renderBuyButton(productDetails) {
    if (typeof productDetails != "undefined" && productDetails.length !== 0) {
      if (productDetails[0].stock < this.state.qty) {
        return (
          <button className="btn btn-secondary m-1 ">
            {" "}
            <i className="fa fa-shopping-cart "></i> No stock
          </button>
        );
      } else
        return (
          <button
            className="btn btn-success m-1 "
            onClick={this.handleAddToBasket.bind(this)}
          >
            {" "}
            <i className="fa fa-shopping-cart "></i> Buy
          </button>
        );
    }
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
                  <img className="w-100" src={this.renderPic(productDetails)} />
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
                  <div
                    className="input-group mt-3"
                    onChange={this.handleqty.bind(this)}
                  >
                    <input
                      className="form-control-sm  "
                      type="number"
                      defaultValue={1}
                      min={1}
                      max={99}
                    />
                    {this.renderBuyButton(productDetails)}
                    {this.state.feedbackAddToBasket}
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
