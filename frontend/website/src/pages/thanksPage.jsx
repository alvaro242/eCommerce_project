import React, { Component, Fragment } from "react";
import Thanks from "../components/other/thanks";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class thanksPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenu />
        <Thanks />
        <Footer />
      </Fragment>
    );
  }
}

export default thanksPage;
