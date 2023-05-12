import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getBasket, getServerURL, deleteFromBasket } from "../api/api";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class BasketContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: "guest",
      basket: [],
      refresh: false,
      feedbackEmpty: <div></div>,
      feedbackCheckoutButton: <div></div>,
      subtotal: "Loading...",
    };
  }

  componentDidMount() {
    const user = this.props.user;
    // console.log(user);

    if (typeof user == "undefined") {
      //guest basket from local memory
      this.setState({ subtotal: "" });
      const basketString = localStorage.getItem("basket");

      //if basket has items
      if (basketString) {
        let basket = JSON.parse(basketString);
        this.setState({ basket: basket });
      } else {
        //if basket is empty
        this.setState({
          feedbackEmpty: (
            <div>
              <i>Your basket is empty</i>
            </div>
          ),
        });
      }
    } else {
      this.setState({ loggedIn: true, user: user });
      console.log("logged in");
      getBasket()
        .then(
          (response) =>
            this.setState({ basket: response.data }) &
            this.setTotalToPay(response.data)
        )
        .catch((error) => console.log(error));
    }
  }

  setTotalToPay(arrayOfItems) {
    console.log(arrayOfItems);
    let counter = 0;
    arrayOfItems.forEach((element) => {
      counter = counter + parseFloat(element.total_price);
    });

    let counterTwoDigits = counter.toFixed(2);
    this.setState({ subtotal: "Subtotal: " + counterTwoDigits });
  }

  renderGrounded(groundOption) {
    if (groundOption === 0) {
      return "No";
    } else return "Yes";
  }

  handleRemoveFromCart = (id, index) => {
    if (this.state.loggedIn === true) {
      deleteFromBasket(id)
        .then(() => this.setState({ refresh: true }))
        .catch((error) => console.log(error));
    } else {
      console.log("handle removal");
      let checkedBasket = this.state.basket;

      checkedBasket.splice(index, 1);

      let stringednewbasket = JSON.stringify(checkedBasket);

      localStorage.setItem("basket", "[" + stringednewbasket + "]");
    }
  };

  refresh() {
    if (this.state.refresh === true) {
      return <Redirect to={"/basket"} />;
    }
  }

  renderPrice(unitPrice, qty, totalPrice, ground) {
    if (ground === 0) {
      return unitPrice + " x " + qty + "= £" + totalPrice;
    } else {
      return unitPrice * ground + " x " + qty + "= £" + totalPrice;
    }
  }

  render() {
    const basket = this.state.basket;
    console.log(basket);

    const renderBasket = basket.map((item, index) => {
      return (
        <Col className="p-1" key={index} lg={12} md={12} sm={12} xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} lg={3} sm={6} xs={5}>
                  <img
                    className="w-100 h-100"
                    src={getServerURL() + item.image_nobackground}
                  />
                </Col>

                <Col md={6} lg={6} sm={6} xs={5}>
                  <h5>{item.product_name}</h5>

                  <h6>
                    {" "}
                    {this.renderPrice(
                      item.unit_price,
                      item.qty,
                      item.total_price,
                      item.ground
                    )}
                  </h6>

                  <i>
                    Grounded:
                    {this.renderGrounded(item.ground)}
                  </i>
                </Col>

                <Col md={2} lg={2} sm={2} xs={2}>
                  <div className="input-group">
                    <input
                      defaultValue={item.qty}
                      max={99}
                      className="form-control"
                      type="number"
                    />

                    <Button
                      className="btn removebtn site-btn"
                      onClick={() => this.handleRemoveFromCart(item.id, index)}
                    >
                      <i className="fa fa-trash "></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        {this.refresh()}
        <Container>
          <div className=" text-center mb-55">
            <h2>Basket</h2>
            {this.state.feedbackEmpty}
          </div>

          <Row>{renderBasket}</Row>
          <Row>
            <Col md={12} lg={12} sm={12} xs={12} className="text-center p-2">
              {" "}
              {this.state.subtotal}
              <br />
              <Link to="/checkout">
                <Button className="p-2">Checkout</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default BasketContent;
