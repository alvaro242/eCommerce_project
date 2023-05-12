import React, { Component, Fragment } from "react";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import About from "../components/Content/about";

class AboutPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <NavMenu />
        <About />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
