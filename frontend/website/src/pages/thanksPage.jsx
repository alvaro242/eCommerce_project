import React, { Component, Fragment } from "react";
import ThanksContent from "../components/Content/thanksContent";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class thanksPage extends Component {
  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <NavMenu />
        <ThanksContent />
        <Footer />
      </Fragment>
    );
  }
}

export default thanksPage;
