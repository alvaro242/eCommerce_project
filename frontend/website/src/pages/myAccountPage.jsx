import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import MyAccountContent from "../components/Content/myAccountContent";

class MyAccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentReceived: false,
      orderRef: "",
      amount: "",
    };
  }

  componentDidMount() {
    this.test();
  }

  test() {
    try {
      if (this.props.location.state.orderPaid === true) {
        this.setState({
          paymentReceived: true,
          orderRef: this.props.location.state.orderRef,
          amount: this.props.location.state.amount,
        });
      }
    } catch {
      console.log("no order");
    }
  }

  render() {
    const user = this.props.user;

    return (
      <Fragment>
        <Container>
          <NavMenu />
          <MyAccountContent
            user={user}
            paymentReceived={this.state.paymentReceived}
            amount={this.state.amount}
            orderRef={this.state.orderRef}
          />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default MyAccountPage;
