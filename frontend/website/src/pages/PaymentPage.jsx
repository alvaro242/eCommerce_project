import React, { Component, Fragment } from "react";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { payment } from "../components/api/api";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

class PaymentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderRef: this.props.location.state.orderRef,
      amount: this.props.location.state.amount * 100, //stripe requires amount in cents
      name: "",
      number: "",
      month: "",
      year: "",
      cvv: "",
      feedbackPayment: <div></div>,
      payment: "pending",
    };
  }

  componentDidMount() {}

  handlesubmit = (e) => {
    e.preventDefault();

    let objectToServer = {
      number: this.state.number,
      exp_month: this.state.month,
      exp_year: this.state.year,
      cvc: this.state.cvv,
      amount: this.state.amount,
      description: this.state.orderRef,
    };

    payment(objectToServer)
      .then((response) => this.handleResponse(response))
      .then((error) => console.log(error));
  };

  handleResponse(response) {
    if (response.status === 201) {
      this.setState({
        feedbackPayment: (
          <div className="alert alert-success">
            Payment succesful. Redirecting to your orders page..
          </div>
        ),
        payment: "taken",
      });
    } else {
      this.setState({
        feedbackPayment: (
          <div className="alert alert-danger">
            Details incorrect. Please try it again
          </div>
        ),
      });
    }
  }

  redirect() {
    if (this.state.payment === "taken") {
      return (
        <Redirect
          to={{
            pathname: "/account",
            state: {
              orderRef: this.state.orderRef,
              amount: this.props.location.state.amount,
              orderPaid: true,
            },
          }}
        />
      );
    }
  }

  render() {
    return (
      <Fragment>
        {this.redirect()}
        <NavMenu />

        <div className="container" lg={6} md={6} xl={6}>
          <div className="container bg-light">
            <div className="py-5 text-center">
              <h2>Payment</h2>
              <p className="lead">
                Please remember <b>this is is not</b> a real website. Do not
                enter real data. Although all the details are securily stored by
                the payment provider through HTTPS
              </p>
            </div>

            <div className="row mx-auto">
              <div className="col-md-8 order-md-1">
                <form className="" onSubmit={this.handlesubmit}>
                  <hr className="mb-4" />

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                        onChange={(e) =>
                          this.setState({ number: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Expiration</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-month"
                        placeholder="MM"
                        required
                        onChange={(e) =>
                          this.setState({ month: e.target.value })
                        }
                      />
                      <p className="p-1"></p>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-year"
                        placeholder="YYYY"
                        required
                        onChange={(e) =>
                          this.setState({ year: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                        onChange={(e) => this.setState({ cvv: e.target.value })}
                      />
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Pay now
                  </button>
                  <p className="p-2"></p>
                  {this.state.feedbackPayment}
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default PaymentPage;
