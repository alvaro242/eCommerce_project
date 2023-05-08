import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import { getBasket } from "../api/api";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: [],
      TotalToPay: "Calculating...", //string so cant proceed if cust confirms
      loggedIn: false,
    };
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({ loggedIn: true });
    }

    getBasket()
      .then(
        (response) =>
          this.setState({ basket: response.data }) &
          this.setTotalToPay(response.data)
      )
      .catch((error) => console.log(error));
  }

  setTotalToPay(arrayOfItems) {
    console.log(arrayOfItems);
    let counter = 0;
    arrayOfItems.forEach((element) => {
      counter = counter + parseFloat(element.total_price);
      /*  console.log(
        "counter: " + counter + " , totalprice: " + element.total_price
      );
      */
    });

    this.setState({ TotalToPay: counter });
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <Fragment>
          <Container>Please, register to continue </Container>
        </Fragment>
      );
    } else
      return (
        <Fragment>
          <Container>Total to pay: {this.state.TotalToPay} </Container>
        </Fragment>
      );
  }
}

export default Checkout;
