import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { getBasket, newOrder } from "../api/api";
import { Redirect } from "react-router-dom";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: [],
      TotalToPay: "Calculating...", //string so cant proceed if cust confirms
      loggedIn: false,
      payment_method: "card",
      delivery_address: "",
      billing_address: "",
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
    });

    this.setState({ TotalToPay: counter });
  }

  handlesubmit = (e) => {
    e.preventDefault();

    let objectToServer = {
      delivery_address: this.state.delivery_address,
      billing_address: this.state.billing_address,
      subtotal: this.state.TotalToPay,
      total: this.state.TotalToPay,
      tax_percentage: "20",
      payment_method: "card",
      orderRef: "",
      refirect: false,
    };

    console.log(objectToServer);

    newOrder(objectToServer)
      .then(
        (response) => {
          this.setState({ orderRef: response.data, redirect: true });
        } //Order created with status unpaid, redirect to payment
      )
      .catch((error) => console.log(error));
  };

  redirect() {
    if (this.state.redirect === true) {
      return (
        <Redirect
          to={{
            pathname: "/payment",
            state: {
              orderRef: this.state.orderRef,
              amount: this.state.TotalToPay,
            },
          }}
        />
      );
    }
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <Fragment>
          <Container>Please, register to continue </Container>
        </Fragment>
      );
    } else if (this.state.basket === []) {
      return (
        <Fragment>
          <Container>Your basket is empty </Container>
        </Fragment>
      );
    }
    return (
      <Fragment>
        {this.redirect()}
        <Container>
          <center>
            <Form className="formContainer" onSubmit={this.handlesubmit}>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Delivery address"
                  onChange={(e) =>
                    this.setState({ delivery_address: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <br />
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Billing address"
                  onChange={(e) =>
                    this.setState({ billing_address: e.target.value })
                  }
                />
              </div>

              <br />
              <div className="align-self-end">
                Total to pay: {this.state.TotalToPay} <br />
                <small>
                  Price includes 20% tax and free shiping within the UK
                </small>
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      value="card"
                      className="custom-control-input"
                      checked
                      required
                      onChange={(e) =>
                        this.setState({ payment_method: e.target.value })
                      }
                    />
                    <label className="custom-control-label">Debit card</label>
                  </div>

                  <div className="custom-control custom-radio"></div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Pay now
              </button>
            </Form>
          </center>
        </Container>
      </Fragment>
    );
  }
}

export default Checkout;
