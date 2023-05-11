import React, { Component, Fragment } from "react";
import { Container, Table } from "react-bootstrap";
import Footer from "../components/common/footer";
import NavMenu from "../components/common/navMenu";
import { getProductsFromOrder } from "../components/api/api";

class OrderPage extends Component {
  constructor({ props, match }) {
    super(props);

    this.state = {
      orderID: match.params.id,
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getProductsFromOrder(this.state.orderID)
      .then((response) =>
        this.setState({ products: response.data, isLoading: false })
      )
      .catch((error) => console.log(error));
  }

  renderGround(value) {
    if (value == 0) {
      return "No";
    } else {
      return "Yes(+£" + value + ")";
    }
  }

  renderTable() {
    if (this.state.isLoading == false) {
      const renderProducts = this.state.products.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{item.product_SKU}</th>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{this.renderGround(item.ground)}</td>
            <td>{item.price}</td>
          </tr>
        );
      });

      return (
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Product reference</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Ground </th>
              <th scope="col">Total amount</th>
            </tr>
          </thead>
          <tbody>{renderProducts}</tbody>
        </Table>
      );
    } else return "Loading products from order...";
  }

  render() {
    return (
      <Fragment>
        {console.log(this.state.products)}
        <Container>
          <NavMenu></NavMenu>
          <h3>Your order details:</h3>
          Order number: {this.props.location.state.orderRef} <br />
          Delivery address: {this.props.location.state.delivery_address}
          <br />
          Billing address: {this.props.location.state.billing_address}
          <br />
          Subtotal: {this.props.location.state.subtotal} (Tax included)
          <br />
          Tax: {this.props.location.state.tax_percentage}%
          <br />
          Total: {this.props.location.state.total}
          <br />
          <br />
          {this.renderTable()}
        </Container>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default OrderPage;
