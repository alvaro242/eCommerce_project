import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import { myOrders } from "../api/api";
import { Link } from "react-router-dom";

class MyAccountContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentReceived: false,
      orderRef: "",
      amountPaid: "",
      orders: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMyOrders();
  }

  getMyOrders() {
    myOrders()
      .then((response) =>
        this.setState({ orders: response.data, isLoading: false })
      )
      .catch((error) => console.log(error));
  }

  renderContentTable() {
    console.log(this.state.orders);

    let inversedOrders = this.state.orders.reverse();

    const renderOrders = inversedOrders.map((item, index) => {
      let date = "-";
      if (item.updated_at) {
        date = item.updated_at.slice(0, 10);
      }

      let status = "";

      if (item.status === "unpaid") {
        status = (
          <Link
            to={{
              pathname: "/payment",
              state: {
                orderRef: item.id,
                amount: item.total,
              },
            }}
            style={{ color: "black" }}
          >
            Unpaid
          </Link>
        );
      } else if (item.status === "Paid") {
        status = "Paid";
      }

      return (
        <tr key={index}>
          <th scope="row">{item.id}</th>
          <td>{date}</td>
          <td>{item.total}</td>
          <td>{status}</td>
          <td>{item.payment_method}</td>

          <td>
            <Link
              style={{ color: "black" }}
              to={{
                pathname: "/order/" + item.id,
                state: {
                  orderRef: item.id,
                  delivery_address: item.delivery_address,
                  billing_address: item.billing_address,
                  subtotal: item.subtotal,
                  tax_percentage: item.tax_percentage,
                  total: item.total,
                },
              }}
            >
              View
            </Link>
          </td>
        </tr>
      );
    });

    return renderOrders;
  }

  renderOrders() {
    if (this.state.isLoading === true) {
      return "Loading...";
    } else {
      return (
        <Table responsive className="table" striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Order number</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Payment method</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>{this.renderContentTable()}</tbody>
        </Table>
      );
    }
  }

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
        {this.renderOrders()}
      </Fragment>
    );
  }
}

export default MyAccountContent;
