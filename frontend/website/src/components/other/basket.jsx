import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Product1 from "./../../assets/images/products/colombia2.png";
import { getBasket, getServerURL } from "../api/api";

class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: "guest",
      basket: [],
    };
  }

  componentDidMount() {
    const user = this.props.user;
    // console.log(user);

    if (typeof user == "undefined") {
      console.log("not logged in");
    } else {
      this.setState({ loggedIn: true, user: user });
      console.log("logged in");
      getBasket()
        .then((response) => this.setState({ basket: response.data }))
        .catch((error) => console.log(error));
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
                <Col md={3} lg={3} sm={6} xs={6}>
                  <img
                    className="w-100 h-100"
                    src={getServerURL() + item.image_nobackground}
                  />
                </Col>

                <Col md={6} lg={6} sm={6} xs={6}>
                  <h5>{item.product_name}</h5>
                  <h6> Quantity = {item.qty} </h6>
                  <h6>
                    {" "}
                    {item.unit_price} x {item.qty} = £{item.total_price}
                  </h6>
                </Col>

                <Col md={2} lg={2} sm={2} xs={2}>
                  <input
                    defaultValue={item.qty}
                    max={99}
                    className="form-control"
                    type="number"
                  />

                  <Button className="btn btn-block  mt-3  site-btn">
                    <i className="fa fa-trash ">Remove</i>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container>
          <div className=" text-center mb-55">
            <h2>Basket</h2>
          </div>

          <Row>{renderBasket}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Basket;
