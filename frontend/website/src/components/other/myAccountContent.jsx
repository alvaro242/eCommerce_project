import React, { Component, Fragment } from "react";

class MyAccountContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentReceived: false,
      orderRef: "",
      amountPaid: "",
    };
  }

  componentDidMount() {}

  renderPaymentReceived() {
    try {
      if (this.props.paymentReceived === true) {
        return (
          <div className="alert alert-success">
            {console.log(this.props)}
            You have succesfully paid £{this.props.amount} for your order{" "}
            <b>{this.props.orderRef}</b>
          </div>
        );
      }
    } catch {
      console.log("hola");
    }
  }

  render() {
    const user = this.props.user;
    let name = user.name;
    let email = user.email;
    console.log(this.props.paymentReceived);

    return (
      <Fragment>
        <h5>
          Name: {name}
          <p></p>
          Email: {email}
        </h5>
        <p className="p-4"></p>
        {this.renderPaymentReceived()}
        My orders:
      </Fragment>
    );
  }
}

export default MyAccountContent;
