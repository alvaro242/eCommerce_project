import React, { Component, Fragment } from "react";
import Contact from "../components/other/contact";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenu />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
